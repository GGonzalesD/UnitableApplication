import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chart } from 'chart.js';
import { ChatService } from '../../shared/chat.service';

@Component({
  selector: 'app-rmessage',
  templateUrl: './rmessage.component.html',
  styleUrls: ['./rmessage.component.css']
})
export class RmessageComponent implements OnInit {

  tipo: string = 'line';
  chart: any;

  constructor(private chatService:ChatService,
     @Inject(MAT_DIALOG_DATA) public data:string) {}

  ngOnInit(): void {
    this.changeGra('line');
  }

  changeGra(tipo: string){
    this.tipo = tipo;
    if(this.chart != null){
      1;
      this.chart.destroy();
    }
    this.drawReport();
  }

  drawReport(){
    this.chatService.getReport(this.data).subscribe(data => {

      let cantidades = data.map(x => x.quatity);
      let horas = data.map(x => x.dateCreate + "h");

      console.log(cantidades);
      console.log(horas);

      this.chart = new Chart('canvas', {
        type: this.tipo,
        data: {
          labels: horas,
          datasets:[
            {
              label: 'Cantidad',
              data: cantidades,
              borderColor: '#3cba9f',
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 0, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ]
            }
          ]
        },
        options: {
          legend: {
            display: true,
          },
          scales:{
            xAxes:[
              {
                display: true,
              }
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  beginAtZero: true,
                }
              }
            ]
          }
        }
      })

    });
  }

}
