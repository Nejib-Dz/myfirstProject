import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aticle',
  templateUrl: './aticle.component.html',
  styleUrls: ['./aticle.component.css']
})
export class AticleComponent implements OnInit {
  @Output() change = new EventEmitter();
  @Input()  article:any;
  @Input("text") var: any;

  constructor() { }

  ngOnInit(): void {
    console.log("the paragraphe is : "+this.var);

  }

 
}
