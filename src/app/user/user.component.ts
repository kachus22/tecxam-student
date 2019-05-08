import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { RoomService } from '../shared/room.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  roomId: string;

  constructor(private userService: UserService, private route: Router, public roomService: RoomService) { }

  ngOnInit() {
    let ids = window.location.pathname.match(/\d+/g);
    this.roomId = ids[0];
    this.checkRoom()
  }

  checkRoom(){
    this.roomService.room(this.roomId)
      .subscribe(
        (result) => {
          // this.route.navigateByUrl(`${postBody}/user`);
          // localStorage.setItem('email', f.value.user);
          // localStorage.setItem('authorization', result.headers.get('authorization'));
          // this.success.emit(true);
        },
        (error) => {
          // console.log(error)
          this.route.navigateByUrl(`room`);
          // console.error(error);
          // this.success.emit(false);
        }
      );
  }

  onSubmit(form: NgForm){
  //   let postBody = 
  //   {
  //     attempt: {
  //         exam_token: 12345,
  //         // student_id: A00819313,
  //         answers: {
  //             1: [1,2],
  //             2: "hola lola",
  //             3: [4,5,6]
  //         }
  //     }
  // }
    // this.userService.attempt(postBody)
    //   .subscribe(
    //     (result) => {
    //       console.log(result);
    //       // localStorage.setItem('email', f.value.user);
    //       // localStorage.setItem('authorization', result.headers.get('authorization'));
    //       // this.success.emit(true);
    //     },
    //     (error) => {
    //       console.error(error);
    //       // this.success.emit(false);
    //     }
    //   );
    let id = form.value.enrollment;
    this.route.navigateByUrl(`${this.roomId}/${id}/quiz`);
  
  }

}
