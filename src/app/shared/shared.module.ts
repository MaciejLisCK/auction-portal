import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HighlightDirective,
    FormsModule
  ]
})
export class SharedModule { }
