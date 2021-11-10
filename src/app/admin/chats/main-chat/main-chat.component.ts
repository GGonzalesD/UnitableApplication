import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from '../shared/chat.model';
import { ChatService } from '../shared/chat.service';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.css']
})
export class MainChatComponent implements OnInit {

  public chat!: Chat;

  constructor(private chatService:ChatService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.chatService.get(id).subscribe(data => {
        this.chat = data as Chat;
        console.log(data);
      });
    }else{
      
    }
  }

  sendMessage(e:any){
    console.log(e);
  }

}
