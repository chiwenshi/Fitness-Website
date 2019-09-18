import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  constructor(private userSrervice:UserService,private router:Router) { }

  ngOnInit() {
    this.user = this.userSrervice.loggeduser;
  }
  gomyplan(){
    if(this.userSrervice.isloggedin){
      this.router.navigate(['/myplan']);
    }
    else alert('please login first!');
  }
}
