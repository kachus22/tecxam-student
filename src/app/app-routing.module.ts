import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { UserComponent } from './user/user.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: 'room', component: RoomComponent},
  { path: ':id/user', component: UserComponent},
  { path: ':id/:id/quiz', component: QuizComponent},
  { path: 'result', component: ResultComponent},
  { path: '', redirectTo:'room', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
