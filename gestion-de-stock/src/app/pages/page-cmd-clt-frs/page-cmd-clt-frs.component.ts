import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrls: ['./page-cmd-clt-frs.component.scss']
})
export class PageCmdCltFrsComponent implements OnInit {
  public origin = ''
  constructor(
    private router: Router,
    private activedrouter : ActivatedRoute

  ) { }
nouvellecommandeclient():void{
  if(this.origin === 'client'){
    this.router.navigate(['nouvellecommandeclt']);
  }else if(this.origin ==='fournisseur'){
    this.router.navigate(['nouvellecommandefrs']);
  }
}
  ngOnInit(): void {
    this.activedrouter.data.subscribe( data =>{
      this.origin = data['origin'];
    })
  }

}
