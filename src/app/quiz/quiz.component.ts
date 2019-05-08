import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Router } from '@angular/router';
import { RoomService } from '../shared/room.service';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, AfterViewInit {

  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  started = false;
  zoom = false;
  selectedImage = '';
  percentage;
  time = null;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 100000000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2
  }

  carouselItems = [
    { number: 6,
      type: 1,
      question: "¿Cuál de los siguientes compuestos no es quiral?",
      answers: ["2,3-dibromobutano", "1,3-dibromobutano ", " 2-clorobutano"]
    },
    { number: 6,
      type: 2,
      image: "https://i.stack.imgur.com/ORdas.png",
      question: "Es la molécula se muestra a continuación quiral o aquiral?",
      answers: ["quiral", "aquiral"]
    },
    { number: 6,
      type: 3,
      question: "Es la molécula se muestra a continuación quiral o aquiral?",
      answers: ["https://i.stack.imgur.com/ORdas.png", "https://energia-nuclear.net/uploads/definicio/12/1/molecula.jpg", "https://energia-nuclear.net/uploads/definicio/32/1/athomic-theory.png"]
    },
    { number: 6,
      type: 4,
      question: "¿Cuál de los siguientes compuestos no es quiral?",
      answers: ["2,3-dibromobutano", "1,3-dibromobutano ", " 2-clorobutano"]
    }
  ];

  answers = [];

  doneAns = [];

  roomId: string;
  studentId: string;
  courseId: string;
  examId: string;

  exam: any = {
    name: "",
    desc: "",
    time: ""
  };


  constructor(private cdr: ChangeDetectorRef, private route: Router, public roomService: RoomService,
    public quizService: QuizService) {}

  ngOnInit(){
    let ids = window.location.pathname.match(/\d+/g);
    this.roomId = ids[0];
    this.studentId = ids[1];
    
    this.checkRoom();
  }



  onChange(e){
    this.percentage = 100 / this.carouselItems.length * (e.currentSlide + 1);
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.percentage = 100 / this.carouselItems.length * (this.myCarousel.activePoint + 1);
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }

  startTimer() {
    let seconds = this.exam.time*60;
    setInterval(() => {
      seconds--;
      setTimeout(() => this.time = this.displayTimeElapsed(seconds), 0);
    }, 1000);
    
  }

  displayTimeElapsed(seconds){
    return Math.floor(seconds / 3600) + ':' + Math.floor(seconds / 60) + ':' + Math.floor(seconds % 60);
  }

  startExam() {
    this.carouselItems.push({ number: 11,
      type: 10,
      question: "Listo para enviar",
      answers: []
    })
    this.started = true;
    for(let i = 0; i < this.carouselItems.length; i++) {
      this.answers.push({ });
      this.doneAns.push(false);
    }
    this.startTimer();
  }

  submitExam(){
    this.route.navigateByUrl('/result');
  }

  zoomIn(image){
    this.selectedImage = image;
    this.zoom = true;
  }

  zoomOut(){
    this.zoom = false;
  }

  moveToQuestion(index){
    this.myCarousel.moveTo(index, true);
  }

  selectAns(q, a, value){
    this.answers[q].a = value;
    this.doneAns[q] = true;
    let t = Object.keys(this.answers[q]).length;
    console.log(t);
  }

  checkRoom(){
    this.roomService.room(this.roomId)
      .subscribe(
        (result:any) => {
          this.exam = {
            name: result.name,
            desc: result.description,
            time: result.time_limit
          }
          this.courseId = result.course_id;
          this.examId = result.id;

          this.quizService.fill(this.courseId, this.examId)
            .subscribe(
              (result:any) => {
                console.log(' asd', result);
                // this.exam = {
                //   name: result.name,
                //   desc: result.description,
                //   time: result.time_limit
                // }
              },
              (error) => {
                console.error(error);
              }
            );

        },
        (error) => {
          this.route.navigateByUrl(`room`);
          // console.error(error);
        }
      );
  }
}