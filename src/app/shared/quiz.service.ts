import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(public base: BaseService) { }

  fill(cid: string, eid: string) {
    return this.base.get(`courses/${cid}/exams/${eid}/random_questions`);
  }

  attempt(postBody: any) {
    return this.base.post(`attempt`, postBody);
  }
}
