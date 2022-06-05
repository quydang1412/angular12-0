import { Component, OnInit, ViewChild } from '@angular/core';
import { ConComponent } from '../con/con.component';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss']
})
export class ChaComponent implements OnInit {
  public chaMessage: string = '';
  @ViewChild('thangTeo')  thangTeo : ConComponent | undefined;
  @ViewChild('thangTi')  thangTi : ConComponent | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  conGoiCha(name: string){
    this.chaMessage= 'chao con '+name;
  }

  choTien(){
    this.thangTeo?.choTien(5);
    this.thangTi?.choTien(10);
  }

}
