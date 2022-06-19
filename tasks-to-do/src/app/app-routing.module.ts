import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskerComponent } from './pages/tasker/tasker.component';

const routes: Routes = [
  { path: 'tasker', component: TaskerComponent },
  { path: '', component: TaskerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
