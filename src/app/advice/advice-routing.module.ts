import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvicesComponent } from './advices/advices.component';
import { AdviceDetailComponent } from './advice-detail/advice-detail.component';


const routes: Routes = [
  {
    path: '',
    component: AdvicesComponent,
    children: [
      {path: ':adviceId', component: AdviceDetailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviceRoutingModule { }
