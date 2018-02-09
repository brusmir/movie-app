import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { MovieList } from '../model/movieList';
import { Movie } from '../model/movie';
import { Genre } from '../model/genre';

const baseUrl = "http://localhost:3000/api/movies";
const genreUrl = "http://localhost:3000/api/genres";

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(params? :any):Observable<MovieList>{
  	let queryParams = {};
		if(params){
			queryParams = {
				params : new HttpParams()
				.set("sort", params.sort || "")
        .set("sortDirection", params.sortDirection || "")
        .set("page", params.page && params.page.toString() || "")
        .set("pageSize", params.page && params.pageSize.toString() || "")
      }
    }
  	return this.http.get(baseUrl, queryParams).map( res => new MovieList(res))
  }

  getGenres(){
    return this.http.get<Array<Genre>>(genreUrl).map( response => { 
      let retVal: Genre[] = [];
      response.forEach(elem => retVal.push(new Genre(elem)));
        return retVal;
    });
  }

  saveGenre(genre){
    return this.http.post(genreUrl, genre).map(res => new Genre(res))
  }

  getMovie(id):Observable<Movie>{
    return this.http.get(baseUrl + "/" + id).map(res => new Movie(res))
  }

  saveMovie(movie: Movie){
    return this.http.post(baseUrl, movie).map(res => new Movie(res))
  } 

}
