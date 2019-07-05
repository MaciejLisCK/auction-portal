import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ap-advice-detail',
  template: `
    <p>
      {{adviceId}}
    </p>
  `,
  styles: []
})
export class AdviceDetailComponent implements OnInit {
  adviceId: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.adviceId = params.adviceId;
    });
  }
}
