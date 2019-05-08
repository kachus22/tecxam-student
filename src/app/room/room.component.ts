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

  constructor(public roomService: RoomService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    // let postBody = { token: form.value.roomId }
    let postBody = form.value.roomId;
    console.log(postBody)
    this.roomService.room(postBody)
      .subscribe(
        (result) => {
          this.route.navigateByUrl(`${postBody}/user`);
          // localStorage.setItem('email', f.value.user);
          // localStorage.setItem('authorization', result.headers.get('authorization'));
          // this.success.emit(true);
        },
        (error) => {
          console.log(error)
          // console.error(error);
          // this.success.emit(false);
        }
      );
  
  }

}
