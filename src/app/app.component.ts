import { Component,OnInit } from '@angular/core';
import{ DataService } from './data.service';  


export interface User {
  id:Number;
  UserName: string;
  Role : string;
  Actions: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'First-Project-Angular';
    //private data:any=[];

    constructor(private dataService:DataService ) {}

    ngOnInit(){
     
    }
}
