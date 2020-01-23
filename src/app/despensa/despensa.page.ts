import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despensa',
  templateUrl: './despensa.page.html',
  styleUrls: ['./despensa.page.scss'],
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

}
