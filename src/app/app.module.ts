import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { AticleComponent } from './aticle/aticle.component';
import { ModalComponent } from './modal/modal.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    SummaryPipe,
    AticleComponent,
    ModalComponent,
    AddArticleComponent,
    SignupComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    //{provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
