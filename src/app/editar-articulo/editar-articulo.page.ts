import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.page.html',
  styleUrls: ['./editar-articulo.page.scss'],
})
export class EditarArticuloPage implements OnInit {

	id: number;
	articulo: any;
	articulosDespensa: any;

  constructor(public taskService: TaskService,private rutaActiva: ActivatedRoute) { }

	ngOnInit()
	{
		// this.id = this.rutaActiva.snapshot.params.id;
		// console.log('ID: ' + this.id);
		// this.getArticleDespensa(this.id);
		// console.log(this.articulo);
		this.getAllArticlesDespensa();
		//this.getArticleDespensa(this.id);

	}

	getAllArticlesDespensa()
	{
		this.id = this.rutaActiva.snapshot.params.id;
    this.taskService.getArticleDespensa(this.id)
    .then(data => {
      this.articulosDespensa = data;
      console.log(this.articulosDespensa);
    });
	}

	getArticleDespensa(id)
	{
		let art: any;
		this.taskService.getArticleDespensa(id)
    .then(data => {
			art = data;
			this.articulo = data;
			console.log(data);
      console.log(this.articulo);
		});
	}

	ngAfterViewInit()
	{


	//	this.articulo = this.id;
	}
}
