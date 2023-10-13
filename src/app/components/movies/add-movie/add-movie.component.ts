import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { IMovie } from '../movie';
import { MOVIES } from '../movies-mock-data';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movies: IMovie[] = MOVIES;
  findInfo?: FormControl;
  // movieForm:FormGroup=new FormGroup({
  //   title:new FormControl("",[Validators.required,Validators.minLength(3)]),
  //   year:new FormControl(new Date().getFullYear(),Validators.max(new Date().getFullYear())),
  //   imageUrl: new FormControl(""),
  //   description: new FormControl(""),
  //   duration:new FormControl('01:30'),
  //   genres: new FormControl([])
  // });
  movieForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    
    this.movieForm = this.fb?.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      year: [new Date().getFullYear(), Validators.max(new Date().getFullYear())],
      imageUrl: "",
      description: "",
      duration: '01:30',
      genres: []
    });
  }

  ngOnInit(): void {

    this.findInfo = new FormControl("find");
    //create form with FormBuilder
  }


  addMovie() {
    let item = this.movieForm.value;
    item.id = this.movies.length + 1;
    console.log(item);
    this.movies.push(item);

  }
  addMovieWithParam(formFull: FormGroupDirective) {
    let item = this.movieForm.value;
    console.log(item);
    console.log(formFull.valid);
    console.log(formFull.value.year);
    console.log(formFull.value.genres);
  }
  printInfo() {
    console.log(this.findInfo?.value);
  }
}
