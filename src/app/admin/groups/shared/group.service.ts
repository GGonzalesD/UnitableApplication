import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Group } from './group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllPageable(page:number=0, size:number=5){
    let params=new HttpParams();
    params=params.append('page', page);
    params=params.append('size', size);

    return this.http.get<any>(`${this.apiBase}/grupos/page`, {params});
  }

  getAll(){
    return this.http.get<Group[]>(`${this.apiBase}/grupos`)
  }

  get(id:number){
    return this.http.get(`${this.apiBase}/books/${id}`);
  }

}
