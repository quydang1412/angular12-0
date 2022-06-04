import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FirstComponent } from './first-component/first-component.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';
const routes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: 'Home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
