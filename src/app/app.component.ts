import { Component,OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent
{


  public appPages = [
    {
      title: 'Lista',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Despensa',
      url: '/despensa',
      icon: 'cart'
    },
    {
      title: 'Historico',
      url: '/historico-articulos',
      icon: 'list'
    },
    {
      title: 'Usuario',
      url: '/user',
      icon: 'person'
		}
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
		this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
	}

}
