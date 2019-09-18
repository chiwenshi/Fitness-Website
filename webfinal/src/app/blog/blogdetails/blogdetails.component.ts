import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  blog:any;
  constructor(private blogService:BlogService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getBlogById();
  }
  getBlogById(){
    this.blogService.getBlogDetails(+this.route.snapshot.paramMap.get('id')).subscribe(blog=>this.blog=blog);
  }
}
