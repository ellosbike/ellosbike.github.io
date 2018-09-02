import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.validateToken()) {
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
    return false;
  }

  validateToken(): boolean {
    // TODO: A validation by API will be done here
    if (this.getToken()) {
      return true;
    }

    return false;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token) {
    localStorage.setItem('token', token);
  }

  public removeToken() {
    localStorage.removeItem('token');
  }

}
