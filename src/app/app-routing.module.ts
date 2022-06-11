import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FirstComponent } from './first-component/first-component.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PostDataComponent } from './post-data/post-data.component';
const routes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'FirstComponent', component: FirstComponent },
  { path: 'TemplateDrivenForm', component: TemplateDrivenFormComponent },
  { path: 'ReactiveForm', component: ReactiveFormComponent },
  { path:'GetData', component: GetDataComponent},
  { path:'PostData', component: PostDataComponent},
  { path: '', component: HomeComponent },
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
