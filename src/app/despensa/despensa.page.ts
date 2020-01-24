import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despensa',
  templateUrl: './despensa.page.html',
  styleUrls: ['./despensa.page.scss','./../app.component.scss'],
})
export class DespensaPage implements OnInit {

	articulosDespensa: any;

  constructor(public taskService: TaskService) { }

	ngOnInit()
	{
		this.getAllArticlesDespensa();
	}


	getAllArticlesDespensa() {
    this.taskService.getAllArticlesDespensa()
    .then(data => {
      this.articulosDespensa = data;
      console.log(this.articulosDespensa);
    });
	}

	itemPurchased(articulo)
	{
		console.log(articulo);
	}

	editar(articulo)
	{
		console.log(articulo);
	}

	borrar(articulo)
	{
		console.log(articulo);
	}

}
