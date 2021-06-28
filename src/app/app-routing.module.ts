import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { SlComponent } from './sl/sl.component';


const routes: Routes = [
  {path : '',redirectTo:'/sl',pathMatch:"full"},
  {path : 'sl',component:SlComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
