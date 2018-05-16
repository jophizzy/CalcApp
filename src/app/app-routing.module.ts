import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


export const routes: Routes = [
  { path: 'calc', component: CalcComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: 'AppComponent' , pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
