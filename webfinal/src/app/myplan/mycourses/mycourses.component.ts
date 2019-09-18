import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  user:any;
  allcourses:any;
  courselist:any=[];
  constructor(private userService:UserService,private router:Router,private courseService:CourseService) { }

  ngOnInit() {
    this.user = this.userService.loggeduser;
    this.getAllCourses();
    this.getCourseByUser();

  }
  getAllCourses(){
    this.courseService.getCourses().subscribe((courses=>this.allcourses=courses));
  }
  getCourseByUser(){
    this.courseService.getCoursesByUser(this.userService.loggeduser).subscribe(courselist=>{
      for(var i = 0;i<courselist.length;i++){
        for(var j=0; j<this.allcourses.length;j++){
          if(courselist[i]===this.allcourses[j]._id){
            this.courselist.push(this.allcourses[j]);
          }
        }
      }
    });
  }
  deleteCourse(course:any){
    this.courseService.deleteCourse(this.userService.loggeduser,course).subscribe(courselist=>alert("delete sucess"));
  }
  // deleteCourse(course:Course){
  //   this.userService.deleteCourse(this.userService.loggeduser,course);
  //   for(var i =0; i<this.userService.loggeduser.courses.length;i++){
  //     if(course.name===this.userService.loggeduser.courses[i].name){
  //       this.courselist.splice(i,1);
  //     }
  //   }
  // }
}
