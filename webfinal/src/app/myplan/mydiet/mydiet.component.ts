import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mydiet',
  templateUrl: './mydiet.component.html',
  styleUrls: ['./mydiet.component.css']
})
export class MydietComponent implements OnInit {
  user:any;
  dietlist:any=[];
  allDiets:any;
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit() {
    this.user = this.userService.loggeduser;
    this.getAllDiets();
    this.getDietListByUser();
    // this.dietlist = this.user.diet;
  }
  getAllDiets(){
    this.userService.getDiets().subscribe((diets=>this.allDiets=diets));
  }
  getDietListByUser(){
    this.userService.getDietsByUser(this.userService.loggeduser).subscribe(dietslist=>{
      for(var i = 0;i<dietslist.length;i++){
        for(var j=0; j<this.allDiets.length;j++){
          if(dietslist[i]==this.allDiets[j]._id){
            this.dietlist.push(this.allDiets[j]);
          }
        }
      }
    });
  }
  deleteDiet(diet:any){
    this.userService.deleteDiet(this.userService.loggeduser,diet).subscribe(dietlist=>alert("delete success!"));
    // for(var i =0; i<this.userService.loggeduser.diet.length;i++){
    //   if(diet.name===this.userService.loggeduser.diet[i].name){
    //     this.dietlist.splice(i,1);
    //   }
    // }

  }
}
