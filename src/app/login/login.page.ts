import { StorageService } from './../services/storage.service';
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
  checkSeleccionado: boolean;

  constructor(public storageService: StorageService, public taskService: TaskService,private router: Router) { }

  ngOnInit()
  {

    console.log(this.storageService.getLocal('loginRemember'));
    if (this.storageService.getLocal('loginRemember') === true)
    {
      this.router.navigate(['/home']);
    }
  }


	checklogin()
  {
    var element = <HTMLInputElement> document.getElementById("chkRemember");
    this.checkSeleccionado = element.checked;
    this.taskService.checklogin(this.user,this.pass)
			.then(data =>
      {
				console.log(data);
        if (data === true)
        {
          console.log(this.checkSeleccionado);
          if (this.checkSeleccionado)
          {
            this.storageService.setLocal('loginRemember', true);
          }
          this.router.navigate(['/home']);
        }
      });

	}

}
