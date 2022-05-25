import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Data{
  constructor(
       public UserName:string,
       public Email:string,
       public FirstName:string,
       public LastName:string,
       public Role:string, 
       public Actions:Number,
       public id:Number )
       {

       }
}


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  data:Data[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    //this.getAPIList();
    
  }

  
  getAPIList(){
    this.http.get<any>('/api/users').subscribe(
      response => {
        console.log(response);
        this.data = response;
      }
    );
  }

   
}
