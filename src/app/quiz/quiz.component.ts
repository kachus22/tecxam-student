import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, AfterViewInit {

  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  percentage = 50

  @ViewChild('myCarousel') myCarousel;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 100000000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(){
    this.startTimer();
  }

  test(){
    console.log('asd');
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.percentage = this.myCarousel.activePoint*10;
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }

  startTimer() {
    let seconds = 0;
    let time = setInterval(() => {
      seconds++;
    }, 1000);
  }

}
