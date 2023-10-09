import { Time } from "@angular/common";

export interface IMovie{
    id:number;
    title:string;
    year:number;
    imageUrl:string;
    description?: string;
    duration:Time;
    // isCurrent:boolean;
    genres?:string[];
}