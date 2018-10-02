import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
 // styleUrls: ['./tugas3.component.css']
  styles:[`
        .online {
            color:  white;
        }
    `]
})
export class Tugas3Component implements OnInit {
  allowNewServer = false;
  serverName = 'TestServer';
  detailsCreated = false;
  details = [];
  constructor() { }

  ngOnInit() {
  }

  onCreationStatus() {
    if(this.detailsCreated == true){ 
      this.detailsCreated = false;
    }else if(this.detailsCreated == false){
      this.detailsCreated = true;
    }
    
    this.details.push(this.details.length+1);
  }
}
