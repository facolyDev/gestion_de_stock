import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PagesStatistiquesComponent } from './pages/pages-statistiques/pages-statistiques.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelleArticleComponent } from './pages/articles/nouvelle-article/nouvelle-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { PageClientsComponent } from './pages/clients/page-clients/page-clients.component';
import { PageFournisseurComponent } from './pages/fournisseurs/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelCmdCltFrsComponent } from './components/nouvel-cmd-clt-frs/nouvel-cmd-clt-frs.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelleCategorieComponent } from './components/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePassComponent } from './pages/profil/changer-mot-de-pass/changer-mot-de-pass.component';

// appel du router outlet dans app.component.html
const routes: Routes = [
  //Navigation entre les differente page
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    //sera utiliser dans les template [routerLink]="['/inscrire']"
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: '',
    component: PageDashboardComponent,
    //Navigation entre les enfants de la page dashboard
    children: [
      {
        path: 'article',
        component: PageArticleComponent
      },
      {
        path: 'statistiques',
        component: PagesStatistiquesComponent
      },
      {
        path: 'nouvel-article',
        component: NouvelleArticleComponent
      },
      {
        path: 'mvtstk',
        component: PageMvtstkComponent
      },
      {
        path: 'client',
        component: PageClientsComponent
      },
      {
        path: 'nouveau-client',
        component: NouveauCltFrsComponent,
        data:{
          origin: 'client'
        }
      },
      {
        path: 'fournisseur',
        component: PageFournisseurComponent
      },
      {
        path: 'nouveau-fournisseur',
        component: NouveauCltFrsComponent,
        data:{
          origin: 'fournisseur'
        }
      },
      {
        path: 'commandeclient',
        component: PageCmdCltFrsComponent,
        // diferencier la page commande fournisseur de la page commande client
        data:{
          origin: 'client'
        }
      },
      {
        path: 'nouvellecommandeclt',
        component: NouvelCmdCltFrsComponent,
        data:{
          origin:'clients'
        }
      },
      {
        path: 'nouvellecommandefrs',
        component: NouvelCmdCltFrsComponent,
        data:{
          origin: 'fournisseurs'
        }
      },
      {
        path: 'commandefournisseur',
        component: PageCmdCltFrsComponent,
        // diferencier la page commande fournisseur de la page commande client
        data:{
          origin: 'fournisseur'
        }
      },
      {
        path: 'categorie',
        component: PageCategoriesComponent
      },
      {
        path: 'nouvellecategorie',
        component: NouvelleCategorieComponent
      },
      {
        path: 'nouvelutilisateur',
        component: PageUtilisateurComponent
      },
      {
        path: 'nouvelutilisateurs',
        component: NouvelUtilisateurComponent
      },
      {
        path: 'profil',
        component: PageProfilComponent
      },
      {
        path: 'changermotdepasse',
        component: ChangerMotDePassComponent
      },
    ]

  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
