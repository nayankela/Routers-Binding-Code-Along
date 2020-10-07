import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component'
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
   {path: 'databinding', component:DataBindingComponent},
   {path: 'aboutus', component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
