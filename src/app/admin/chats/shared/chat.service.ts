import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReportOrderDto } from './chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  // GET /chats/{id}

  get(id:string){
    return this.http.get(`${this.apiBase}/chats/${id}`);
  }

  getReport(id:string){
    return this.http.get<ReportOrderDto[]>(`${this.apiBase}/mensajes/report/${id}`);
  }

  sendMessage(chatId:number, message:string){
    return this.http.post(`${this.apiBase}/mensajes`, { chat_id: chatId, mensaje:message });

  }
}
