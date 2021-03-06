import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() {}

    intercept(req , next){
      let tokenizeReq = req.clone({
        setHeader: {
          Authorization : 'Bearer aabbcc'
        }
      })
      return next.handle(tokenizeReq);
   }
}
