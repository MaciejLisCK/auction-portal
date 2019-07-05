import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviceRoutingModule } from './advice-routing.module';
import { AdvicesComponent } from './advices/advices.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path: 'advices', component: AdvicesComponent }
];

@NgModule({
  declarations: [AdvicesComponent],
  imports: [
    CommonModule,
    AdviceRoutingModule
  ]
})
export class AdviceModule { }
