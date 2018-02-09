import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NewMovieComponent } from './movies/new-movie/new-movie.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'movies', component: MoviesComponent },
	{ path: 'movies/:id', component: NewMovieComponent},
  { path: 'new', component: NewMovieComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }