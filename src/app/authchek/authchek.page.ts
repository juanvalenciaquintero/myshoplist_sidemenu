import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';
import { Router } from '@angular/router';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-authchek',
  templateUrl: './authchek.page.html',
  styleUrls: ['./authchek.page.scss'],
})
export class AuthchekPage implements OnInit {

  constructor(public storageService: StorageService, public taskService: TaskService,private router: Router) { }

	ngOnInit()
	{
		console.log(this.storageService.getLocal('logged'));
    if (this.storageService.getLocal('logged') === true)
    {
      this.router.navigate(['/home']);
		}
		else
		{
			this.router.navigate(['/login']);
		}
  }

}
