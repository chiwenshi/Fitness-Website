
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  course:any;
  courselist:any[];
  israted:boolean=false;
  currentRate:any;
  rate:any;
  //category:string;
  //categorylist:Category[];

  constructor(private courseService:CourseService,private route:ActivatedRoute,private userService:UserService,private router:Router) { }

  ngOnInit() {
    //this.category = this.route.snapshot.paramMap.get('name');
    // this.getCourses();
    this.getCourseById();
    this.getRateByCourseId();
  }
  getCourseById():void{
    this.courseService.getCourseById(+this.route.snapshot.paramMap.get('id')).subscribe(course=>this.course = course);
  }
  getRateByCourseId(){
    this.courseService.getRateByCourseId(+this.route.snapshot.paramMap.get('id')).subscribe(rate=>this.rate=rate);
  }
  // getCourses(){
  //   this.courseService.getCourses().subscribe(data=>this.courselist=data);
  // }
  // getCourseById():void{
  //   for(var i = 0; i<this.courselist.length; i++){
  //     if(+this.route.snapshot.paramMap.get('id')===this.courselist[i].id){
  //       this.course = this.courselist[i];
  //     }
  //   }
  // }
  addCourse(){
    if(this.userService.isloggedin){
      this.courseService.addCourse(this.userService.loggeduser,this.course).subscribe(data=>alert("added successfully!"));
    }
    else{alert("please login first!")}
  }
  rated(){
    this.israted=true;
    this.courseService.addRatedByCourseId(+this.route.snapshot.paramMap.get('id'),this.currentRate).subscribe(data=>alert("thansks for your feedback!"));
  }
  // addCourse(){
  //   if(this.userService.isloggedin){
  //     this.userService.loggeduser.courses.push(this.course);
  //     alert("add successfully!");
  //   }
    //this.userService.pushCourse(this.service.loggeduser,this.course);
  //   else{alert("please login first!")}
  // }
  // gosimilar(course:Course){
  //   this.router.navigate(['/course',this.category,course.id])
  // }
}
