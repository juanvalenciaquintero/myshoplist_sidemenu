import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { StorageService } from './services/storage.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';


import { HttpClientModule } from '@angular/common/http';
// import { HTTP } from '@ionic-native/http/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StorageService,
    AuthService,
    AuthGuard,
    AndroidFingerprintAuth,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
