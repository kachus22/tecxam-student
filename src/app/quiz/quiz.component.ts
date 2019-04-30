import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  time = "";

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 100000000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2
  }

  test = `<div cdkDropList class="example-list" (cdkDropListDropped)="drop($event)">
  <div class="example-box" *ngFor="let movie of movies" cdkDrag>
    {{movie.title}}
    <img *cdkDragPreview [src]="movie.poster" [alt]="movie.title">
  </div>
</div>`;
  // carouselItems = [this.test, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

  carouselAnswers = [
    null,
    null
  ]


  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(){
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
    let seconds = 900;
    setInterval(() => {
      seconds--;
      this.time = this.displayTimeElapsed(seconds)
    }, 1000);
  }

  displayTimeElapsed(seconds){
    return Math.floor(seconds / 3600) + ':' + Math.floor(seconds / 60) + ':' + Math.floor(seconds % 60);
  }

  startExam() {
    this.started = true;
    this.startTimer();
  }

  zoomIn(image){
    this.selectedImage = image;
    this.zoom = true;
  }

  zoomOut(){
    this.zoom = false;
  }

  movies = [
    {
      title: 'Episode I - The Phantom Menace',
      poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
    },
    {
      title: 'Episode II - Attack of the Clones',
      poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
    },
    {
      title: 'Episode III - Revenge of the Sith',
      poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
    },
    {
      title: 'Episode IV - A New Hope',
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
    }
  ];

  drop(event: CdkDragDrop<{title: string, poster: string}[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}
