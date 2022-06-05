import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

  constructor() { }
  public loginName: string = '';
  ngOnInit(): void {
    this.loginName = 'user';
    console.warn(this.loginName);
  }

}
