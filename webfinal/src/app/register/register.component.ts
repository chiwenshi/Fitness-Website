import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  emailIsValid = true;
  passwordIsValid = true;
  addressIsValid = true;
  usernameIsValid = true;
  cityIsValid = true;
  stateIsValid = true;
  zipIsValid = true;
  // checkIsValid = true;
  allValid = false;


  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  // addUser() {
  //   this.userService.create(this.user)
  //       .subscribe(
  //           data => {
  //               this.router.navigate(['login']);
  //           },
  //           error => {
  //           });
  //   }

  addUser() {
    const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    this.emailIsValid = reg.test(this.user.email);
    if (this.emailIsValid === true) {
      if (this.user.email !== undefined) {
        if (this.user.email.length > 3) {
          this.emailIsValid = true;
        } else {
          this.emailIsValid = false;
        }
      } else {
        this.emailIsValid = false;
      }
    } else {
      this.emailIsValid = false;
    }


      if (this.user.password !== undefined) {
        if (this.user.password.length > 6) {
          this.passwordIsValid = true;
        } else {
          this.passwordIsValid = false;
        }
      } else {
        this.passwordIsValid = false;
      }

    if (this.user.address !== undefined) {
      if (this.user.address.length > 6) {
        this.addressIsValid = true;
      } else {
        this.addressIsValid = false;
      }
    } else {
      this.addressIsValid = false;
    }

    if (this.user.username !== undefined) {
      if (this.user.username.length > 3) {
        this.usernameIsValid = true;
      } else {
        this.usernameIsValid = false;
      }
    } else {
      this.usernameIsValid = false;
    }

    if (this.user.city !== undefined) {
        this.cityIsValid = true;
      } else {
        this.cityIsValid = false; }

    // if (this.user.state.value !== 'Choose...') {
    //   this.stateIsValid = true;
    // } else {
    //   this.stateIsValid = false;
    //   alert('Please choose your state');
    // }

    if (this.user.zipcode !== undefined) {
      this.zipIsValid = true;
    } else {
      this.zipIsValid = false; }

    if (this.emailIsValid === true) {
      if (this.passwordIsValid === true) {
        if (this.addressIsValid === true) {
          if (this.usernameIsValid === true) {
            if (this.cityIsValid === true) {
              if (this.stateIsValid === true) {
                this.allValid = true;
                this.userService.create(this.user)
                      .subscribe(
                          data => {
                              this.router.navigate(['login']);
                          },
                          error => {
                          });
                  }
              }
            }
          }
        }
      }

    }
  }


