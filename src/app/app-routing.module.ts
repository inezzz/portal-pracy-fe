import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './components/job/job.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  { path: 'search/:id', component: JobComponent },
  {path: 'edit/:id', component: EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
