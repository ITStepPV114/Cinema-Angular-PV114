import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  movieForm:FormGroup=new FormGroup({
    title:new FormControl(""),
    year:new FormControl(new Date().getFullYear()),
    imageUrl: new FormControl(""),
    description: new FormControl(""),
    duration:new FormControl('01:30'),
    genres: new FormControl([])
  });

  addMovie(){
    let item=this.movieForm.value;
    console.log(item);
  }
}
