import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesService } from '../app/services/routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(routeService: RoutesService, router: Router) {
    window.addEventListener('scroll', (event) => {
      console.log('scrolling');
      router.navigateByUrl(routeService.nextPage);
    })
  }
}
