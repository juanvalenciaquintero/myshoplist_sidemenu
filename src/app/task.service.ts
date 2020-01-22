import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

	private url = 'http://estadisticas.dx.am';

	constructor(public http: HttpClient)
	{
		console.log('Entrado en servicio');
	}

	checkArt(articulo:string)
  {
    const path = this.url +'/myshoplist.php?valor=3&name='+articulo;
	//	return this.http.get<number>(path);
		return new Promise(resolve => {
			this.http.get(path)
				.subscribe(data =>
				{
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
	}

	addArticle(articulo: any)
  {
    const path = this.url +'/myshoplist.php';
    let param =
    {
      'action': 'insert',
      'artic' : articulo
		}
		return new Promise(resolve => {
			this.http.post(path,param)
				.subscribe(data =>
				{
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
  }

	addArticleDesp(articulo)
  {
    const path = this.url +'/myshoplist.php';
    let param =
    {
      'action': 'insertDesp',
      'artic' : articulo
		}
		return new Promise(resolve => {
			this.http.post(path,param)
				.subscribe(data =>
				{
				resolve(data);
			}, err => {
				console.log(err);
			});
		});

  }


	getAllArticles()
	{

		return new Promise(resolve => {
			this.http.get(this.url+'/myshoplist.php?valor=1')
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
			this.http.get(this.url+'/myshoplist.php?valor=2')
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
    const path = this.url + '/myshoplist.php';
    console.log(articulo);
    let param =
    {
      'action': 'update',
      'artic' : articulo
		}
		return new Promise(resolve =>
		{
			this.http.post(path, param)
				.subscribe(data =>
			{
			resolve(data);
		}, err => {
			console.log(err);
		});
	});
	}

	deleteArticles()
  {
    const path = this.url +'/myshoplist.php';
    let param =
    {
      'action': 'delete',
      'artic' : 'comprados'
		}
		return new Promise(resolve =>
			{
				this.http.post(path, param)
					.subscribe(data =>
				{
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
    //return this.http.post(path, param, this.httpOptions);
  }
}
