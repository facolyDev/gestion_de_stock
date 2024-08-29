import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-mvt-stk-article',
  templateUrl: './detail-mvt-stk-article.component.html',
  styleUrls: ['./detail-mvt-stk-article.component.scss']
})
export class DetailMvtStkArticleComponent implements OnInit {

  constructor(private route: Router) { }
  cancelclick():void{
    this.route.navigate(['mvtstk']);
  }
  ngOnInit(): void {
  }

}
