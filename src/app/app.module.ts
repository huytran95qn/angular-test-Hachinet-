import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupsModule } from './popups/popups.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PagesModule } from './pages/pages.module';
import { getIntroduceYourselfFeatureKey, getIntroduceYourselfReducer } from './stores/introduce-yourself/introduce-yourself.reducer';
import { IntroduceYourselfEffect } from './stores/introduce-yourself/introduce-yourself.effect';

const STORE_FEATURE_KEY = {
  [getIntroduceYourselfFeatureKey]: getIntroduceYourselfReducer
};

const EFFECTS = [
  IntroduceYourselfEffect
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PopupsModule,
    StoreModule.forRoot(STORE_FEATURE_KEY, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      }
    }),
    EffectsModule.forRoot(EFFECTS),
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
