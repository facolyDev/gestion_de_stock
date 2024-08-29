import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrls: ['./page-fournisseur.component.scss']
})
export class PageFournisseurComponent implements OnInit {

  constructor(private router: Router) { }
  nouveaufournisseur():void{
    this.router.navigate(['nouveau-fournisseur'])
  }
  ngOnInit(): void {
  }

}
