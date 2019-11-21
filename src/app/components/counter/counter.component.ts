import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.styl']
})
export class CounterComponent implements OnInit {
  @Input() increment: string;

  interval: any;
  counter: number = 0;

  constructor() { }

  ngOnInit() {}

  start() {
    if(!this.interval) {
      this.interval = setInterval(() => this.tick(), 1000);
    }
    this.counter = 0;
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
    this.counter = 0;
  }

  pause() {
    clearInterval(this.interval);
    this.interval = null;
  }

  tick() {
    this.counter += parseInt(this.increment);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
