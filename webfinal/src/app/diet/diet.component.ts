import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {
  dietlist:any[];
  constructor(private userService:UserService,) { }

  ngOnInit() {
    this.getDiets();  
  }
  getDiets(){
    this.userService.getDiets().subscribe(diets => this.dietlist = diets);
  }
  addDiet(diet:any){
    if(this.userService.isloggedin){
      this.userService.addDiet(this.userService.loggeduser,diet).subscribe(data=>alert("add successfully!"));
    }
    else alert("please login first!")
  }
}
