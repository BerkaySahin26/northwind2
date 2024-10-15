import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token"); // Token'i localStorage'dan al
    let newRequest : HttpRequest<any>;
    newRequest = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + token)
    })
     return next.handle(newRequest); // Token yoksa orijinal isteği gönder
  }
}
