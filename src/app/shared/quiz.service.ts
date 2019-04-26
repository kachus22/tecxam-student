import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(public base: BaseService) { }

  login(postBody: any) {
    return this.base.post('login', postBody);
    // return this.base.postResponse('login', postBody);
  }

  isLogged(){
    return localStorage.getItem('authorization') != null;
  }
}
