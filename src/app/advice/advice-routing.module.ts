import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvicesComponent } from './advices/advices.component';
import { AdviceDetailComponent } from './advice-detail/advice-detail.component';


const routes: Routes = [
  {
    path: '',
    component: AdvicesComponent,
    children: [
      {path: '1', component: AdviceDetailComponent},
      {path: '2', component: AdviceDetailComponent},
      {path: '3', component: AdviceDetailComponent},
      {path: '4', component: AdviceDetailComponent},
      {path: '5', component: AdviceDetailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviceRoutingModule { }
