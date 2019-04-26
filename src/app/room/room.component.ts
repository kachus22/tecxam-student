import { Component, OnInit } from '@angular/core';
import { RoomService } from '../shared/room.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  constructor(private roomService: RoomService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    console.log('asdasd');
    // let postBody = { user: {email: f.value.email_inline}}
  //   this.roomService.login(postBody)
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
    this.route.navigateByUrl('/user');
  
  }

}
