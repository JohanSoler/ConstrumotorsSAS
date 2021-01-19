import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS 

import { MainComponent } from "../app/main/main.component";
import { ServiceComponent } from "../app/service/service.component";
import { CommunicateComponent } from "../app/communicate/communicate.component";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'communicate', component: CommunicateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
