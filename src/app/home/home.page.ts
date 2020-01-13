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
	visible = false;
	constructor(public taskService: TaskService)
	{
		this.getAllArticles();
		this.getAllArticlesPurchased();
  }

  ngOnInit() {
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
}
