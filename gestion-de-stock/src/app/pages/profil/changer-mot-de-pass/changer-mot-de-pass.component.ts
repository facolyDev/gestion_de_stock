import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mot-de-pass',
  templateUrl: './changer-mot-de-pass.component.html',
  styleUrls: ['./changer-mot-de-pass.component.scss']
})
export class ChangerMotDePassComponent implements OnInit {

  constructor(private route: Router) { }
  cancelClick():void{
    this.route.navigate(['profil']);
  }
  ngOnInit(): void {
  }

}
