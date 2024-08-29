import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit {
public origin = '';
  constructor(
    private router : Router,
    private activedroute : ActivatedRoute
  ) { }
  saveClick():void{
    
  }
  cancelClick():void{
    if(this.origin === 'client'){
      this.router.navigate(['client']);
    }else if(this.origin === 'fournisseur'){
      this.router.navigate(['fournisseur']);
    }
  }
  ngOnInit(): void {
    this.activedroute.data.subscribe( data =>{
      this.origin = data['origin'];
    })
  }

}
