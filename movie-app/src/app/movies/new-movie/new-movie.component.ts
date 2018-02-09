import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesService } from '../service/movies.service';
import { Genre } from '../model/genre';
import { Movie } from '../model/movie';

@Component({
  selector: 'mv-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
	private movieForm: FormGroup;
	private genres: Genre[];
	private secondForm: boolean = false;
	private _id: number;
	private genre;

  constructor(private fb: FormBuilder, private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) {
  	this.createForm();
  }

  ngOnInit() {
  	let id :string = this.route.snapshot.paramMap.get('id');
		if (id){
			this.moviesService.getMovie(id).subscribe( res => {
				this.movieForm.patchValue(res);
				this._id = res._id;
			})			
		}
  	this.moviesService.getGenres().subscribe(res => this.genres = res);
  }

  createForm(){
  	this.movieForm = this.fb.group({
  		name: ["", Validators.required],
  		description: ["", [Validators.required, Validators.minLength(30), Validators.maxLength(250)]],
  		year: ["", [Validators.required, Validators.min(1800), Validators.max(2019)]],
  		rating: "",
  		duration: "",
  		director: "",
  		genre: ""
  	});
  }

  saveMovie(){
  	let movie = new Movie(this.movieForm.value);
  	movie._id = this._id
  	this.moviesService.saveMovie(movie).subscribe(res => this.router.navigate(['movies']));
  }

  saveGenre(){
  	let genre = new Genre();
  	genre.name = this.genre;
  	this.moviesService.saveGenre(genre).subscribe(res => this.genres.push(res));
  	this.secondForm = false;  	
  }

  toggleForm(){
  	this.secondForm = !this.secondForm;
  }

}
