import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { NewMovieComponent } from './movies/new-movie/new-movie.component';
import { MoviesService } from './movies/service/movies.service';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { PaginationComponent } from './movies/pagination/pagination.component';
import { SortComponent } from './movies/sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MoviesComponent,
    NewMovieComponent,
    MovieDetailsComponent,
    PaginationComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
