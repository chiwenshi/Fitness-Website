import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-myplan',
  templateUrl: './myplan.component.html',
  styleUrls: ['./myplan.component.css']
})
export class MyplanComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

}
