import { Component, OnInit,OnDestroy,AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit
{
	backButtonSubscription;
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private platform: Platform,private router: Router) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
	// }

	ngAfterViewInit()
	{
		this.backButtonSubscription = this.platform.backButton.subscribe(()=>
		{
			this.router.navigate(['/home'])
		});
	}

	ngOnDestroy()
	{
		this.backButtonSubscription.unsubscribe();
	}
}
