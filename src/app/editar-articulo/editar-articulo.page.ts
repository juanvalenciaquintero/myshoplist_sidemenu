import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.page.html',
  styleUrls: ['./editar-articulo.page.scss'],
})
export class EditarArticuloPage implements OnInit {

	id: number;
	articulo: any;
  constructor(public taskService: TaskService,private rutaActiva: ActivatedRoute) { }

	ngOnInit()
	{
		this.id = this.rutaActiva.snapshot.params.id;
		console.log('ID: ' + this.id);
		this.getArticleDespensa(this.id);

  }

	getArticleDespensa(id)
	{
		this.taskService.getArticleDespensa(id)
    .then(data => {
      this.articulo = data;
      console.log(this.articulo);
		});
	}
}
