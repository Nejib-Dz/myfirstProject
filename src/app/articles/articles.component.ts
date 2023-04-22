import { Component, OnInit } from '@angular/core';
import { ServicessService } from '../servicess.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

 articles: any = [];
 page =1
 category="all"


  constructor(public servise : ServicessService , private route : ActivatedRoute) { }

  ngOnInit() {
 /*
   this.route.paramMap.subscribe(params =>{
       console.log('id:',params.get('id_category'));

   })
   this.route.queryParamMap.subscribe(queryParams=>{
    if(queryParams.get('page')){
    console.log('page' ,queryParams.get('page'))
    }
   })*/

   combineLatest([
    this.route.paramMap,
    this.route.queryParamMap
   ]).subscribe(combined=>{

    if(combined[0].get('id_category')){
      this.category = combined[0].get('id_category')
    console.log('get article from category:',combined[0].get('id_category'));

    }
    if(combined[1].get('page')){
      this.page = +combined[1].get('page')
    console.log('page' ,combined[1].get('page'))

    }
   this.servise.grtArticles(this.category, this.page).subscribe(data=> {
    console.log(data);

   })
   })



   /* setInterval(()=>{
      this.i++
    }, 1000)
    onKeyUp($event:any){
    this.name= $event.target.value;

  }
  }
  save(name:any){
    console.log("button save", this.name=name);

  }
  articleChanged(event: any)
{
  console.log("this article is : ", event)*/

}
}
