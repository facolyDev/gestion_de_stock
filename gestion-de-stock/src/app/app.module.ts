import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PagesStatistiquesComponent } from './pages/pages-statistiques/pages-statistiques.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BouttonActionComponent } from './components/boutton-action/boutton-action.component';
import { NouvelleArticleComponent } from './pages/articles/nouvelle-article/nouvelle-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailMvtStkArticleComponent } from './components/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './components/detail-mvt-stk/detail-mvt-stk.component';
import { DetailCltFrsComponent } from './components/detail-clt-frs/detail-clt-frs.component';
import { PageClientsComponent } from './pages/clients/page-clients/page-clients.component';
import { PageFournisseurComponent } from './pages/fournisseurs/page-fournisseur/page-fournisseur.component';
import { DetailFournisseurComponent } from './components/detail-fournisseur/detail-fournisseur.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './components/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './components/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelCmdCltFrsComponent } from './components/nouvel-cmd-clt-frs/nouvel-cmd-clt-frs.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelleCategorieComponent } from './components/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './components/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePassComponent } from './pages/profil/changer-mot-de-pass/changer-mot-de-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PagesStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelleArticleComponent,
    PageMvtstkComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailCltFrsComponent,
    PageClientsComponent,
    PageFournisseurComponent,
    DetailFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelCmdCltFrsComponent,
    PageCategoriesComponent,
    NouvelleCategorieComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
