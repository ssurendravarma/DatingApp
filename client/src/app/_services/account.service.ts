import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
//import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {User} from '../_models/User';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.apiUrl;
  private currentUserSource=new ReplaySubject<User>(1);
  currentUser$=this.currentUserSource.asObservable();
  login(model:any){
   return this.http.post(this.baseUrl+'Account/login',model).pipe(
     map((response:User)=>{
       const user=response;
       if(user)
       localStorage.setItem('user',JSON.stringify(user));
       this.currentUserSource.next(user);
     })
   );
  }
  register(model:any){
    return this.http.post(this.baseUrl+'Account/register',model).pipe(
      map(
        (user:User)=>{
          if(user)
          {
            localStorage.setItem('user',JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        }
      )
    )

  }
  logout(){
    localStorage.removeItem('user');

    this.currentUserSource.next(null);
  }
  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }

}
