import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Platform } from '@ionic/angular';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

	user: any;
	id: number;

  constructor(public storageService: StorageService,public taskService: TaskService) { }

	ngOnInit()
	{
		this.id = this.storageService.getLocal('userId');
		console.log(this.id);
    this.taskService.checkUser(this.id)
      .subscribe(data =>
      {
				console.log(data);
			  this.user = data;
      });
	}


}
