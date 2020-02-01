import { Component, OnInit, Input } from '@angular/core';
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

	backButtonSubscription;
	id: number;
	@Input()	articulo: any;
	articulosDespensa: any;


  constructor(public taskService: TaskService,private platform: Platform,private rutaActiva: ActivatedRoute,private router: Router) { }

	ngOnInit()
	{
		// this.id = this.rutaActiva.snapshot.params.id;
		// console.log('ID: ' + this.id);
		 this.getArticleDespensa();
		// console.log(this.articulo);
		//this.getAllArticlesDespensa();


	}

	getAllArticlesDespensa()
	{
		this.id = this.rutaActiva.snapshot.params.id;
    this.taskService.getAllArticlesDespensa()
    .then(data => {
      this.articulosDespensa = data;
      console.log(this.articulosDespensa);
    });
	}

	getArticleDespensa()
	{
		this.id = this.rutaActiva.snapshot.params.id;
		let art: any;
		this.taskService.getArticleDespensa(this.id)
			.subscribe(
				(data) =>
				{
					console.log(data);
					this.articulo = data;
				},
				(error) =>
				{
					console.log(error);
				}
		)
		// this.taskService.getArticleDespensa(this.id)
    // .then(data => {
		// 	art = data;
		// 	this.articulo.subscribe(data);
		// 	console.log(data);
    //   console.log(this.articulo);
		// });
	}

	volver()
	{
		this.router.navigate(['/despensa']);
	}

	ngAfterViewInit()
	{
		this.backButtonSubscription = this.platform.backButton.subscribe(()=>
		{
			this.router.navigate(['/despensa'])
		});
	}

	ngOnDestroy()
	{
		this.backButtonSubscription.unsubscribe();
	}
}
