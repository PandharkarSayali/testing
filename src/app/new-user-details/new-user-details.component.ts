import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-user-details',
  templateUrl: './new-user-details.component.html',
  styleUrls: ['./new-user-details.component.css']
})
export class NewUserDetailsComponent implements OnInit {

  constructor(private  list:DataService) { }

  ngOnInit(): void {
    //this.userName = this.list.getList();
    console.log(2);
  }

}
