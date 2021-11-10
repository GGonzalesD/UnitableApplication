import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent implements OnInit {

  @Output() onSend:EventEmitter<any> = new EventEmitter();
  message:string = '';

  constructor() { }

  ngOnInit(): void {
  }


  sendMessage(){
    this.onSend.emit(this.message);
    this.message = "";
  }

}
