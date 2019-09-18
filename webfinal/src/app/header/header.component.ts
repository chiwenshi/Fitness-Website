import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchname:string;
  courses:any[];
  constructor(private userService:UserService,private router:Router,private courseService:CourseService) { }

  ngOnInit() {
    this.getCourses();
  }
  getCourses(){
    this.courseService.getCourses().subscribe(data=>this.courses=data);
  }
  gohome():void{
    if(this.userService.isloggedin){
      this.router.navigate(['/home',this.userService.loggeduser.username]);
    }
    else this.router.navigate(['/home']);
  }
  logout(){
    this.userService.logout();
    this.router.navigate(['/home'])
  }
  search(){
    if(this.searchname===undefined){
      alert('please input your course');
    }
    else{
      var result = [];
      for(var i = 0; i<this.courses.length;i++){
        var b = new RegExp(this.searchname).test(this.courses[i].name);
        if(b){
          result.push(this.courses[i]);
        }
      }
      this.router.navigate(['/result']);
      this.courseService.result = result;
      this.searchname=undefined;
    } 
  }
}