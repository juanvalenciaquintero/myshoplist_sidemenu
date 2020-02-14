import { TaskService } from './../task.service';
import { Articulo } from './../interfaces/articulo';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-nuevo-articulo',
  templateUrl: './nuevo-articulo.page.html',
  styleUrls: ['./nuevo-articulo.page.scss','./../app.component.scss'],
})
export class NuevoArticuloPage implements OnInit {

  @Input() articulo: Articulo = {
    id: 0,
    name: '',
    brand: '',
    supermarket: '',
    price: 0,
    fecha: new Date,
    pasillo: 0
  };
  constructor(private platform: Platform,private rutaActiva: ActivatedRoute,public taskService: TaskService,private router: Router)
  {

  }

  ngOnInit() {
  }

  volver()
	{
		this.router.navigate(['/despensa']);
  }

  nuevoArticulo()
  {
    console.log(this.articulo);
		this.taskService.nuevoArt(this.articulo)
      .then(data =>
      {
        console.log(data);
				this.router.navigate(['/despensa']);
      });
  }

}
