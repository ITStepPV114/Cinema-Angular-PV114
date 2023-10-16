import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url:string;

  constructor(private http: HttpClient) { 
    this.url='https://localhost:7078/api/movies';
  }

  getAll():Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.url);
  }

  getById(id:number):Observable<IMovie>{
    return this.http.get<IMovie>(`${this.url}/${id}`);
  }
}
