import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  public routes: UrlTree[] = [];
  private static index: number;

  constructor(router: Router) { 
    RoutesService.index = 0;
    
    this.routes = [
        '',
        '/about',
        '/resume',
        '/portfolio',
        '/contact'
      ].map(url => {
        return router.parseUrl(url)
    });
  }

  public get nextPage() {
    return this.routes[RoutesService.index++ % this.routes.length];
  }
}
