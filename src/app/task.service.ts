import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//mport { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

	private url = 'http://estadisticas.dx.am';
	// private url = 'http://myshoplist.is-best.net';

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
     const path =this.url +'/myshoplist.php?valor=1';
    //let path = 'http://juanvalencia.x10host.com/articulos/getAllArt';
		return new Promise(resolve => {
			this.http.get(path )
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
    //let path = 'http://juanvalencia.x10host.com/articulos/getAllArtPurchased';
     const path = this.url +'/myshoplist.php?valor=2';
		// return this.http.get<Article[]>(path);
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

	updateArticle(articulo: number, usuario:number)
  {
    const path = this.url + '/myshoplist.php';
    console.log(articulo);
    let param =
    {
      'action' : 'update',
      'artic'  : articulo,
      'usuario': usuario
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

	getAllArticlesDespensa()
  {
    // const path = '/myshoplist.php?valor=2';
		// return this.http.get<Article[]>(path);
		return new Promise(resolve => {
			this.http.get(this.url+'/myshoplist.php?valor=4')
				.subscribe(data =>
				{
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
	}

	getArticleDespensa(article)
	{
		return this.http.get(this.url + '/myshoplist.php?valor=5&id=' + article);
	}

	returnItemPurchased(articulo: number)
	{
		const path = this.url +'/myshoplist.php';
    let param =
    {
      'action': 'updatePurchased',
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

	deleteArtUnic(articulo: number)
	{
		const path = this.url +'/myshoplist.php';
		let param =
		{
			'action': 'deleteArtUnic',
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


	deleteArticleDespensa(articulo: number)
	{
		const path = this.url +'/myshoplist.php';
    let param =
    {
      'action': 'deleteArtDespensa',
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

	actualizar(articulo)
	{
		const path = this.url +'/myshoplist.php';
    let param =
    {
      'action': 'updateArtUnic',
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

	checklogin(usuario,password)
	{
		const path = this.url +'/myshoplist.php';
    let param =
    {
      'action'  : 'checkLogin',
			'usuario': usuario,
			'password' : password
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

	checkUser(id)
  {
    return this.http.get(this.url + '/myshoplist.php?valor=6&id=' + id);
  }

  updateUser(user)
  {
    const path = this.url +'/myshoplist.php';
    let param =
    {
      'action'  : 'updateUser',
			'usuario': user
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

  updatePass(user, pass)
  {
    const path = this.url +'/myshoplist.php';
    let param =
    {
      'action'  : 'updatePass',
      'usuario': user,
      'password' : pass
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

  nuevoArt(articulo)
  {
    const path = this.url +'/myshoplist.php';
    let param =
    {
      'action': 'nuevoArtDesp',
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

  checkLists()
  {
    return this.http.get(this.url + '/myshoplist.php?valor=7');
  }

  checkNew(articulo)
  {
    let path = 'http://juanvalencia.x10host.com/articulos/addArticle/';
    return this.http.get(path + articulo);
  }
}
