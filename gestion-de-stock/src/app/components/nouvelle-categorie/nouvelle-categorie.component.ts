import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-categorie',
  templateUrl: './nouvelle-categorie.component.html',
  styleUrls: ['./nouvelle-categorie.component.scss']
})
export class NouvelleCategorieComponent implements OnInit {

  constructor(private route: Router) { }
  cancelClick():void{
    this.route.navigate(['categorie']);
  }
  ngOnInit(): void {
  }

}
