import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles/articles.component';
import { ShowComponent } from './components/articles/show/show.component';
import { EditComponent } from './components/articles/edit/edit.component';

const routes: Routes = [
  { path: 'article', component: ArticlesComponent },
  { path: 'article/:id', component: ShowComponent },
  { path: 'create', component: EditComponent },
  { path: '**', redirectTo: 'article' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
