import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrls: ['./page-categories.component.scss']
})
export class PageCategoriesComponent implements OnInit {

  constructor(private route: Router) { }
  nouvellecategorie():void {
    this.route.navigate(['categorie']);
  }
  ngOnInit(): void {
  }

}
