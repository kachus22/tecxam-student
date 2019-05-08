import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(public base: BaseService) { }

  room(token: any) {
    return this.base.post(`${token}`, {});
  }
}
