import { Component, OnInit } from '@angular/core';

import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  courselist:any[];
  categorylist:any[];
  category:string;
  constructor(private courseService : CourseService,private router: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    this.category = this.router.snapshot.paramMap.get('name');
    this.getCourses();
  }
  getCourses():void {
    this.courseService.getCoursesByCategory(this.category).subscribe(courselist => this.courselist = courselist);
    // this.courseService.getCategory().subscribe(categorylist => this.categorylist = categorylist);
    // for(var i =0; i < this.categorylist.length;i++){
    //   if(this.category===this.categorylist[i].name){
    //   this.courselist = this.categorylist[i].courses;
    //   }
    // } 
  }
}
