import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicessService implements OnInit{

  public index=0



  constructor(private http: HttpClient) { }


  grtArticles(category="all", page=1){
    //get articles from backend services --->GET /api/articles
    return this.http.get("https://nodejsaycourse.herokuapp.com/api/articles");
  }
  addtArticles(){
    //post articles to backend services --->POST /api/articles
  }
  deleteArticles(){
    //delete articles with backend services --->DELETE /articles/:id
  }
  updateArticles(){
    //put articles from backend services --->PUT /articles/:id
  }

  ngOnInit(): void {

  }
}
