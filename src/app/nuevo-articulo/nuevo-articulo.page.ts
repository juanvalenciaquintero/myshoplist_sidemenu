import { Articulo } from './../interfaces/articulo';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-nuevo-articulo',
  templateUrl: './nuevo-articulo.page.html',
  styleUrls: ['./nuevo-articulo.page.scss'],
})
export class NuevoArticuloPage implements OnInit {

	@Input() articulo: Articulo;
  constructor() { }

  ngOnInit() {
  }

}
