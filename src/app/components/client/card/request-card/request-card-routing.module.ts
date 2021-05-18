import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestCardComponent } from './request-card.component';

const routes: Routes = [{ path: '', component: RequestCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestCardRoutingModule { }
