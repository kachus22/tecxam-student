import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NguCarouselModule } from '@ngu/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { RoomComponent } from './room/room.component';
import { BaseService } from './shared/base/base.service';
import { QuizService } from './shared/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NguCarouselModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatListModule,
    MatRadioModule,
    MatCheckboxModule,
    PinchZoomModule,
    HttpClientModule
  ],
  providers: [
    BaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
