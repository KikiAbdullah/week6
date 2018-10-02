import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Tidak ada server baru yang telah dibuat!';
  username = '';

  constructor() { 

  }

  ngOnInit() {
  }

  cekInput(){
    if(this.username === ''){
      return this.allowNewServer = true;
        
    }
  }

  onCreationStatus(){
    this.serverCreationStatus = '';
    this.username = '';
  }
}