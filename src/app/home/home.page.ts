import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss','./../app.component.scss'],
})
export class HomePage implements OnInit {

	articulos: any;
	articulosComp: any;
	lista: string[];
	visible = false;
	constructor(public taskService: TaskService)
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
    // setTimeout(function ()
    // {
      //console.log(articulo);
      if (articulo.length > 3)
      {
        this.taskService.checkArt(articulo)
        .then(data =>
        {
           console.log(data);
            if (data !== 0)
						{
							console.log(data.length);
							for (var i = 0; i < data.length; i++)
							{
								listaArt.push(data[i]);
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
}
