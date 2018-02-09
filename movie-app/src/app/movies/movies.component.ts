import { Component, OnInit } from '@angular/core';

import { MoviesService } from './service/movies.service';
import { Movie } from './model/movie';

@Component({
  selector: 'mv-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	private numberOfMovies: number;
	private movies: Movie[];
	private params = {
		sort: "rating",
		sortDirection: "desc",
		page: 1,
		pageSize: 6	
	}

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  	this.getMovie();
  }

  getMovie(){
  	this.moviesService.getMovies(this.params).subscribe( res => {
  		this.numberOfMovies = res.count;
  		this.movies = res.results;
  	})
  }

  updateParams(param){
  	if(param){
  		this.params.sort = param.sort || this.params.sort;
  		this.params.sortDirection = param.sortDirection || this.params.sortDirection;
  		this.params.page = param.page || this.params.page;
  	}
  	this.getMovie();
  }

}
