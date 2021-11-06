import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiBase:string = environment.apiBase;

  constructor(private http:HttpClient) { }

  signIn(login:Login){
    return this.http.post(`${this.apiBase}/login`, login);
  }
}
