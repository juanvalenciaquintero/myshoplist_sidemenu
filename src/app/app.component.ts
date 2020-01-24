import { Component,OnInit,OnDestroy,AfterViewInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit
{

	backButtonSubscription;

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
	ngOnInit() { }

	ngAfterViewInit()
	{
		this.backButtonSubscription = this.platform.backButton.subscribe(()=>
		{
			navigator['app'].exitApp();
		});
	}

	ngOnDestroy()
	{
		this.backButtonSubscription.unsubscribe();
	}
}
