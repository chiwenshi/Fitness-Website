import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlist:any[];
  user:any={};
  judge:any={};
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit() {
    this.userService.logout();
    // this.getUserlist();
  }

  // getUserlist(){
  //   this.userService.getUsers().subscribe(users=>this.userlist=users);
  // }
  submit():void{
    this.userService.login(this.user.email,this.user.password)
        .subscribe(
          data => {
            this.userService.loggeduser = data;
            this.userService.isloggedin = true;
            this.router.navigate(['/home',this.userService.loggeduser.username]);
          }
        )
    // for(var i = 0; i < this.userlist.length; i++){
    //   if (this.user.email === this.userlist[i].email){
    //     this.judge = this.userlist[i];
    //   }
    // }
    // if(this.user.password === this.judge.password){
    //   this.userService.isloggedin = true;
    //   this.userService.loggeduser = this.judge;
    //   this.router.navigate(['/home',this.judge.username]);
    // }
    // if(!this.userService.isloggedin){
    //   alert("please input a valid value!")
    // }
    // else {alert(this.userService.loggeduser.username);}
  }
}
