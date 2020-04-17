import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'heroes', component: HeroesListComponent },
  { path: 'heroes/:id', component: HeroDetailComponent },
  { path: 'create-hero', component: CreateHeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
