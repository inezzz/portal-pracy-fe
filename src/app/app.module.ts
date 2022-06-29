import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Route, Router, RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { TitleComponent } from './components/title/title.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import { AddComponent } from './components/add/add.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { JobComponent } from './components/job/job.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [
  {path: '', component: TitleComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent},
  {path: 'add', component: AddComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    TitleComponent,
    NavigationComponent,
    SearchComponent,
    AddComponent,
    JobComponent,
    EditComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes, {enableTracing: true}),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
