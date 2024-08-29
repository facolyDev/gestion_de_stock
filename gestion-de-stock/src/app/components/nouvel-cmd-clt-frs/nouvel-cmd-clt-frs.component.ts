import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouvel-cmd-clt-frs',
  templateUrl: './nouvel-cmd-clt-frs.component.html',
  styleUrls: ['./nouvel-cmd-clt-frs.component.scss']
})
export class NouvelCmdCltFrsComponent implements OnInit {
public origin = '';
  constructor(
    private activeroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeroute.data.subscribe( data =>{
      this.origin = data['origin'];
    })
  }

}
