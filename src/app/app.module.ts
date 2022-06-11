import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FirstComponent } from './first-component/first-component.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HttpServerService } from './Services/http-server.service';
import {HttpClientModule} from '@angular/common/http';
import { PostDataComponent } from './post-data/post-data.component';
import { ChaComponent } from './cha/cha.component';
import { ConComponent } from './con/con.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FirstComponent,
    PageNotFoundComponent,
    HighlightDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    GetDataComponent,
    PostDataComponent,
    ChaComponent,
    ConComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
