import { Usuario } from './../interfaces/usuario';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss','./../app.component.scss'],
})
export class LoginPage implements OnInit
{

	user: string;
	pass: string;

  constructor(public taskService: TaskService,private router: Router) { }

  ngOnInit() {
  }


	checklogin()
	{
    this.taskService.checklogin(this.user,this.pass)
			.then(data =>
			{
				console.log(data);
			if (data === true)
			{
				this.router.navigate(['/home']);
			}
    });

	}

}
