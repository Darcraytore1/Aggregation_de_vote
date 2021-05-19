import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = localStorage.getItem("id_token");

        //Check if accesToken exists, else send request without bearer token
        if (accessToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + accessToken)
            });

            return next.handle(cloned);
        }
        else {
            //No token; proceed request without bearer token
            return next.handle(req);
        }
    }
}
