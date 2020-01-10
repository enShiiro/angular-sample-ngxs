import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../service/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiServiceService, private router: Router) { }

  canActivate(): boolean {
    if (this.apiService.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/login']);
      return false
    }
  }

}
