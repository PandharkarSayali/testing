import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Data{
  constructor(
       public UserName:string,
       public Email:string,
       public FirstName:string,
       public LastName:string,
       public Role:string, 
       public Actions:Number=null,
       public id:Number )
       {}
}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  data:Data[];
  form: any;
   
  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    //this.getAPIList();
   // console.log("response", this.data);
  }
    username:"";
    email:"";
    firstname:"";
    lastname:"";
    role:"";
    actions:null;
    submitted=false;

  onSubmit(form:NgForm){
    console.log("response", form);
    this.submitted=true;
    this.username=form.value.Username;
    this.email=form.value.Email;
    this.firstname=form.value.FirstName;
    this.lastname=form.value.Lastname;
    this.role=form.value.Roles;
    // this.UserName=Data.UserName;
  }
  
  getAPIList(){
    this.http.get<any>('/api/users').subscribe(
      response => {
        console.log(response);
        this.data = response;
      });
  }  
}
