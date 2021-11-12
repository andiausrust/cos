import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class JwtInterceptor implements HttpInterceptor {

  static authToken: string = null;
  static userId: string = null;

  static setHeaderValues(authToken: string, userId: string): void {
    this.authToken = authToken;
    this.userId = userId;
  }

  static resetHeaderValues() {
    this.authToken = null;
    this.userId = null;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( !this.isInBlockedList(req.url) ) {
      const clonedReq = req.clone({
        setHeaders: {
          authtoken: JwtInterceptor.authToken,
          userid: JwtInterceptor.userId
        }
      });
      return next.handle(clonedReq);
    } else {
      return next.handle(req);
    }
  }

  // filter out login
  isInBlockedList(url: string) {
    return url.includes('/authentication') && !url.includes('/registered');
  }


}
