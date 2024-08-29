import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {
  @Input()
  isNouveauVisible = true;
  @Input()
  isImportVisible = true;
  @Input()
  isExportVisible = true;
  constructor() { }
  @Output()
clickEvent = new EventEmitter()
  ngOnInit(): void {
  }
bouttonclicknouveau():void{
  this.clickEvent.emit();
}
}
