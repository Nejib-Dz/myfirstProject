import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
 categories = [
  {
    id : 1,
    name: 'node.js'
  },
  {
    id : 2,
    name: 'angular'
  },
  {
    id : 1,
    name: 'html'
  }
 ]
  minlength="5"
  constructor() { }

  ngOnInit(): void {
  }
  log(title:any){
    console.log(title);
    
  }
  submit(n:any){
    //console.log(n);
    if (n.valid) {
      console.log("n is valid");
      
    }else{
      console.log("n is not valid");
      
    }
  }
 
}
