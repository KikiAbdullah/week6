import { Component, OnInit } from '@angular/core';
import { Formkuis } from '../shared/formkuis';
@Component({
  selector: 'app-formkuis',
  templateUrl: './formkuis.component.html',
  styleUrls: ['./formkuis.component.css']
})
export class FormkuisComponent implements OnInit {
  daftarMahasiswa:Formkuis[]=[];
  nim='';
  nama='';
  kelas='';
  mahasiswa;

  constructor() { }

  ngOnInit() {
  }

  tambahData(){
    this.mahasiswa= new Formkuis(this.nim, this.nama, this.kelas);
    this.daftarMahasiswa.push(this.mahasiswa);
    this.nim='';
    this.nama='';
    this.kelas='';
  }
}
