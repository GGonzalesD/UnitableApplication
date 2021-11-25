import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionUser } from 'src/app/auth/shared/session-user';
import { UserStorageService } from 'src/app/auth/shared/user-storage.service';
import { RmessageComponent } from '../report/rmessage/rmessage.component';
import { Chat } from '../shared/chat.model';
import { ChatService } from '../shared/chat.service';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.css']
})
export class MainChatComponent implements OnInit {

  public chat!: Chat;
  public usuario!: SessionUser;
  public id!: string | null;

  constructor(private chatService:ChatService,
    private route:ActivatedRoute,
    private router:Router,
    private userStorageService:UserStorageService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usuario = this.userStorageService.user;
    if(this.id){
      this.chatService.get(this.id).subscribe(data => {
        this.chat = data as Chat;
        console.log(data);
      });
    }
  }

  openEstadisticas(){
    const dialogRef = this.dialog.open(RmessageComponent, {data: this.id});
    //const dialogRef = this.dialog.open(RmessageComponent, {chatId:Number.parseInt(this.id)});
  }

  sendMessage(e:any){
    this.chatService.sendMessage(this.chat.id, e).subscribe( _ => {
      if(this.id){
        this.chatService.get(this.id).subscribe(data => {
          this.chat = data as Chat;
        });
      }
    });
    
  }
}
