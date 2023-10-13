import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { MovieCardListComponent } from './components/movies/movie-card-list/movie-card-list.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieCardComponent,
    MovieCardListComponent,
    HomeComponent,
    MovieDetailsComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
