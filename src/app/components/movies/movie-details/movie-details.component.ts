import { Component } from '@angular/core';
import { IMovie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { MOVIES } from '../movies-mock-data';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
 
  movie?: IMovie;
  // private route?: ActivatedRoute;
  // constructor(route: ActivatedRoute) {
  //   this.route?.params.subscribe(params => {
  //     let id = params["id"];
  //     console.log(id);
  //   })
  // }

  constructor(private route: ActivatedRoute) {
    this.route?.params.subscribe(params => {
      let id = params["id"];
      console.log(id);
      this.movie=MOVIES.find(m=>m.id==id);
    })
  }

}
