import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Actividad, ActividadReq } from './actividad.model';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  private apiBase: string = environment.apiBase;

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Actividad[]>(`${this.apiBase}/actividades/listar`)
  }

  createActividad(actividadReq:ActividadReq){
    return this.http.post(`${this.apiBase}/actividades/agregar`, actividadReq)
  }

  deleteActividad(id: number){
    return this.http.delete(`${this.apiBase}/actividades/${id}`)
  }
  editActividad(id:number, actividadReq:ActividadReq){
    return this.http.put(`${this.apiBase}/actividades/${id}`, actividadReq)
  }

  terminarActividad(id:number, actividadReq:ActividadReq){
    return this.http.put(`${this.apiBase}/actividades/finish/${id}`, actividadReq)
  }


}
