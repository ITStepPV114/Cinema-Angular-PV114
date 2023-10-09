import { Component } from '@angular/core';
import { IMovie } from '../movie';
import { MOVIES } from '../movies-mock-data';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent {
   movies:IMovie[]=MOVIES;
}
