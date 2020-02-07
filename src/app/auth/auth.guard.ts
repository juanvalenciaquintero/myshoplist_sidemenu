import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate
{
  constructor(private authService: AuthService,private router: Router) { }

  canActivate()
  {
    console.log('Entrado en authGuard');
    if (this.authService.checkRemember())
    {
      this.router.navigate(['/home']);
      return true;
    } else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
