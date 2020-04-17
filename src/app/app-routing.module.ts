import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

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
