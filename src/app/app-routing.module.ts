import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { MovieCardListComponent } from './components/movies/movie-card-list/movie-card-list.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"movies",component: MovieCardListComponent},
  {path:"movie-details/:id", component: MovieDetailsComponent},
  {path:"add-movie", component: AddMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
