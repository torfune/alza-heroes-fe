import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './components/button/button.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesEffects } from './store/heroes/heroes.effects';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { rootState } from './store';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    CreateHeroComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesListComponent,
    HeaderComponent,
    ButtonComponent,
    SpinnerComponent,
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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
