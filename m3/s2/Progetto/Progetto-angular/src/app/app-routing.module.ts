import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: '', component: HomepageComponent },
  { path: 'completed', component: CompletedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
