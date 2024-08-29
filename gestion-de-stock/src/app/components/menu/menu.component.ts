import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
//Les proprietés du menu
public MenuProperty: Array<Menu>= [{
  id: '1',
  titre:'Tableau de board',
  icon:'fa-solid fa-chart-line',
  url:'',
  //les sous menu
  sousMenu:[
    {
      id: '11',
  titre:'vue d\'ensemble',
  icon:'fa-solid fa-chart-pie',
  url:'',
    },
    {
      id: '12',
  titre:'Statistique',
  icon:'fa-solid fa-chart-bar',
  url:'statistiques',
    },
  ]
},
{
  id: '2',
  titre:'Articles',
  icon:'fa-solid fa-boxes-stacked',
  url:'',
  sousMenu:[
    {
      id: '21',
  titre:'Articles',
  icon:'fa-solid fa-boxes-stacked',
  url:'article',
    },
    {
      id: '22',
  titre:'Mouvement du stock',
  icon:'fa-brands fa-stack-overflow',
  url:'mvtstk',
    },
  ]
},
{
  id: '3',
  titre:'Clients',
  icon:'fa-solid fa-users',
  url:'',
  sousMenu:[
    {
      id: '31',
  titre:'Clients',
  icon:'fa-solid fa-user',
  url:'client',
    },
    {
      id: '32',
  titre:'Commandes Clients',
  icon:'fa-solid fa-cart-shopping',
  url:'commandeclient',
    },
  ]
},
{
  id: '4',
  titre:'Fournisseurs',
  icon:'fa-solid fa-truck',
  url:'',
  sousMenu:[
    {
      id: '11',
  titre:'Fournisseurs',
  icon:'fa-solid fa-truck',
  url:'fournisseur',
    },
    {
      id: '42',
  titre:'Commandes fournisseurs',
  icon:'fa-solid fa-cart-shopping',
  url:'commandefournisseur',
    },
  ]
},
{
  id: '5',
  titre:'Parametrage',
  icon:'fa-solid fa-gears',
  url:'',
  sousMenu:[
    {
      id: '51',
  titre:'Categories',
  icon:'fa-solid fa-layer-group',
  url:'categorie',
    },
    {
      id: '52',
  titre:'Utilisateurs',
  icon:'fa-regular fa-user',
  url:'nouvelutilisateur',
    },
  ]
}

];
private lastSelectedMenu: Menu | undefined;
  constructor(
    private router:Router
  ) {
   }

  ngOnInit(): void {
  }
//la methode navigate du menu
 navigate(menu: Menu):void{
  if(this.lastSelectedMenu){
    this.lastSelectedMenu.active = false;
  }
  menu.active = true;
  this.router.navigate([menu.url]);
  this.lastSelectedMenu = menu;
}

}