import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit {
public origin = '';
  constructor(
    private activedroute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedroute.data.subscribe( data =>{
      this.origin = data['origin'];
    })
  }

}
