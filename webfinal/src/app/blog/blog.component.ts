import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  bloglist:any[];
  newblog:any={};
  constructor(private userService:UserService,private blogService:BlogService) { }

  ngOnInit() {
    this.getBlog();
  }
  getBlog(){
    this.blogService.getBlog().subscribe(bloglist=>this.bloglist=bloglist);
  }
  addBlog(){
    if(this.userService.isloggedin){
      this.blogService.addBlogByUser(this.userService.loggeduser,this.newblog).subscribe(data=>alert("submit successfully!"));
      this.getBlog();
      this.newblog.title=undefined;
      this.newblog.content=undefined;
    }
    else alert("please login first!");
    
  }
}
