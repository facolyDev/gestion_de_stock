import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss']
})
export class PageProfilComponent implements OnInit {

  constructor(private route: Router) {
  }
  changerMotDePasse():void{
    this.route.navigate(['changermotdepasse']);
  }
  ngOnInit(): void {
  }

}
