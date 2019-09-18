import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  categorylist:any[];
  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.getCategory();
  }
  getCategory():void {
    this.courseService.getCategory().subscribe(categorylist => this.categorylist = categorylist)
  }
}
