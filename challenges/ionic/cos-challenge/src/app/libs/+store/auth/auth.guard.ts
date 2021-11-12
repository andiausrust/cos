import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { JwtInterceptor } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean {
    if ( JwtInterceptor.authToken ) {
      return true;
    } else {
      this.router.navigateByUrl('');
      return false;
    }
  }


}
