import { Component, OnInit,OnDestroy,AfterViewInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss','./../app.component.scss'],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {

	articulos: any;
	articulosComp: any;
	lista: string[];
	visible = false;
	backButtonSubscription;
	constructor(public taskService: TaskService,private platform: Platform)
	{
		this.getAllArticles();
		this.getAllArticlesPurchased();
  }

  ngOnInit() {
	}

	checkArt(event: any): void
  {
		let articulo = event.target.value;
		let listaArt: string[] = [];
		let datos: any;
    // setTimeout(function ()
    // {
      //console.log(articulo);
      if (articulo.length > 3)
      {
        this.taskService.checkArt(articulo)
        .then(data =>
				{
						datos = data;
           console.log(data);
            if (data !== 0)
						{
							console.log(datos.length);
							for (var i = 0; i < datos.length; i++)
							{
								listaArt.push(datos[i]);
								}
              this.visible = true;
            } else
            {
              this.visible = false;
            }
          });
		}
		this.lista = listaArt;
    // }, 200);
	}

	selectArt(event:any)
  {
    let seleccionado = <HTMLInputElement>document.getElementById('artic');
    seleccionado.value = event.target.innerHTML;
    seleccionado.value = seleccionado.value.trim();
    console.log(seleccionado.value);
    this.addArticleDesp();
    this.visible = false;
  }

	addArticleDesp()
  {
		let artId: number;
		var id: any;
    let seleccionado = <HTMLInputElement>document.getElementById('artic');
    console.log('addArticleDesp:' +  seleccionado.value);
    this.taskService.addArticleDesp(seleccionado.value)
      .then(data =>
      {
        console.log('Data: ' + data);
        id = data;
        seleccionado.value = '';
        this.addArt(id);
    });
	}

	addArt(articulo:number): void
  {
    console.log('Añadir a la lista artículo:' + articulo);
    this.taskService.addArticle(articulo)
      .then(data =>
      {
        this.getAllArticles();
				this.getAllArticlesPurchased();
      });

  }

	getAllArticles() {
    this.taskService.getAllArticles()
    .then(data => {
      this.articulos = data;
      console.log(this.articulos);
		});

	}

	getAllArticlesPurchased() {
    this.taskService.getAllArticlesPurchased()
    .then(data => {
      this.articulosComp = data;
      console.log(this.articulosComp);
    });
	}

	itemPurchased(articulo)
  {
    this.taskService.updateArticle(articulo)
    .then(data => {
      this.getAllArticles();
      this.getAllArticlesPurchased();
    });
	}

	deleteArt()
  {
    this.taskService.deleteArticles()
    .then(data => {
      this.getAllArticles();
      this.getAllArticlesPurchased();
    });
	}

	deleteArtUnic(articulo,nombre)
	{
		if (confirm("¿Quieres eliminar '" + nombre + "' de la lista?"))
		{
			this.taskService.deleteArtUnic(articulo)
				.then(data =>
				{
					this.getAllArticles();
					this.getAllArticlesPurchased();
				});
		};
	}

	returnItemPurchased(articulo)
	{
		console.log('Anular: ' + articulo);
		this.taskService.returnItemPurchased(articulo)
    .then(data => {
      this.getAllArticles();
      this.getAllArticlesPurchased();
    });
	}


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

  doRefresh(event)
  {
    this.getAllArticles();
    this.getAllArticlesPurchased();

  }
}
