import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

	private url = '/myshoplist.php';

	constructor(public http: HttpClient)
	{
		console.log('Entrado en servicio');
	}

	getAllArticles()
	{

		return new Promise(resolve => {
			this.http.get(this.url+'?valor=1',{
				headers : new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
				.set("Access-Control-Allow-Origin", '*')
				.set("Access-Control-Allow-Credentials", "true")
				.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT")
				.set("Access-Control-Max-Age", "3600")
					.set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me")
			})
				.subscribe(data =>
				{
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
    // const path = '/myshoplist.php?valor=1';
    // return this.http.get<Article[]>(path);
	}

	getAllArticlesPurchased()
  {
    // const path = '/myshoplist.php?valor=2';
		// return this.http.get<Article[]>(path);
		return new Promise(resolve => {
			this.http.get(this.url+'?valor=2')
				.subscribe(data =>
				{
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
	}

	updateArticle(articulo: number)
  {
    const path = '/myshoplist.php';
    console.log(articulo);
    let param =
    {
      'action': 'update',
      'artic' : articulo
		}
		return new Promise(resolve =>
		{
			this.http.post(path, param, {
			headers : new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
			.set("Access-Control-Allow-Origin", '*')
			.set("Access-Control-Allow-Credentials", "true")
			.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT")
			.set("Access-Control-Max-Age", "3600")
				.set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me")
			})
				.subscribe(data =>
			{
			resolve(data);
		}, err => {
			console.log(err);
		});
	});
  }
}
