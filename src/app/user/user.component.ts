import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    // let postBody = { user: {email: f.value.email_inline}}
  //   this.userService.login(postBody)
  //     .subscribe(
  //       (result) => {
  //         localStorage.setItem('email', f.value.user);
  //         localStorage.setItem('authorization', result.headers.get('authorization'));
  //         this.success.emit(true);
  //       },
  //       (error) => {
  //         console.error(error);
  //         this.success.emit(false);
  //       }
  //     );
    this.route.navigateByUrl('/quiz');
  
  }

}
