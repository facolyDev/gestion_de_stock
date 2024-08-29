import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-article',
  templateUrl: './nouvelle-article.component.html',
  styleUrls: ['./nouvelle-article.component.scss']
})
export class NouvelleArticleComponent implements OnInit {
public origin = '';
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  saveclick():void{
    
  }
  cancelclick():void{
    this.route.navigate(['article']);
  }

}
