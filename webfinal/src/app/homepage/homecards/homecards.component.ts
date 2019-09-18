import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.css']
})
export class HomecardsComponent implements OnInit {

  categorylist:any[];
  constructor(private courseService : CourseService) { }

  ngOnInit() {
    this.getCategory();
  }
  getCategory():void {
    this.courseService.getCategory().subscribe(categorylist => this.categorylist = categorylist);
  }
}
