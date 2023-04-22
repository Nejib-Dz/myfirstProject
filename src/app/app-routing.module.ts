import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'add-artile', component:AddArticleComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'category/:id_category', component: ArticlesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
