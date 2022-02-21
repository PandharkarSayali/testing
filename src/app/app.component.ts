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
      /*this.dataService.getAPIList().subscribe((res:any)=>{
        console.log('response is ', res)
    },(err) => {
        console.log('error is ', err)
    })

        this.dataService.postAPIData().subscribe((res:any)=>{
          console.log('response from post data is ', res);
        },(err)=>{
          console.log('error during post is ', err)
      })*/
    }
}
