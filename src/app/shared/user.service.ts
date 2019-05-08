import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public base: BaseService) { }

  attempt(postBody: any) {
    return this.base.post(`attempt`, postBody);
  }
}
