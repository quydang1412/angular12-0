import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponent implements OnInit {
  public counter:number = 0;
  public counterBinhPhuong = 0;
  constructor(private common:CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.LuyThua(this.counter);
    this.common.counter++;
  }

}
