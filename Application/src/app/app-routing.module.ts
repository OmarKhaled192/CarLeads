import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PotentialsComponent } from './potentials/potentials.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:"full" },
  {path: "home", title: "home", component:HomeComponent },
  {path: "potentialsOf/:lead_id", title: "potentials",component: PotentialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
