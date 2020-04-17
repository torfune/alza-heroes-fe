import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { rootState } from './store';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from './store/heroes/heroes.effects';

@NgModule({
  declarations: [
    AppComponent,
    CreateHeroComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesListComponent,
    HeaderComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(rootState),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([HeroesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
