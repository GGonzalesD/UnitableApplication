import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Group, GroupRequest } from './group.model';

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

  getCursosAuto(cursoAuto:string){
    let params=new HttpParams();
    params=params.append('search', cursoAuto);
    return this.http.get<any[]>(`${this.apiBase}/cursos/auto`, {params});
  }

  getCursoByNombre(nombre:string){
    let params=new HttpParams();
    params=params.append('name', nombre);
    return this.http.get<any[]>(`${this.apiBase}/cursos/byname`, {params});
  }

  get(id:number){
    return this.http.get(`${this.apiBase}/grupos/${id}`);
  }

  edit(id:number, groupReq: GroupRequest){
    return this.http.put(`${this.apiBase}/grupos/${id}`, groupReq);
  }

  create(groupReq: GroupRequest) {
    return this.http.post(`${this.apiBase}/grupos`, groupReq);
  }
  
  delete(id: number) {
    return this.http.delete(`${this.apiBase}/grupos/${id}`);
  }

  join(id: number){
    return this.http.put(`${this.apiBase}/usuarios/join/${id}`, {});
  }

}
