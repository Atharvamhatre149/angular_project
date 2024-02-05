import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { BodyComponent } from './components/body/body.component';



const routes: Routes = [
  {
    path:'',component:BodyComponent
  
  },
  {
    path:'card/:index',component:CardDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
