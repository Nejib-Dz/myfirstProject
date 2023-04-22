import { Component, OnInit } from '@angular/core';
import { ServicessService } from '../servicess.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  articles: any = [];

 // public categrry
  constructor(private ServicessService: ServicessService) { }

  ngOnInit() {
//this.articles= this.categrry.grtArticles();

setInterval(()=>{
//this.categrry.index++;
},1000);
  }

}
