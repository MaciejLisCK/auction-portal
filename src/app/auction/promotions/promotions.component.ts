import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-promotions',
  template: `
    <h2> Promocje: </h2>
    <section>
      <p> {{ today | date:'dd.MM.yyyy' }} </p>
      <p> {{ 'Hello World' | uppercase | lowercase }} </p>
    </section>
  `,
  styles: []
})
export class PromotionsComponent implements OnInit {
  today = new Date();
  constructor() { }

  ngOnInit() {
  }

}
