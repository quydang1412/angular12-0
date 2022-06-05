import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  public name:string = '';
  constructor(private common: CommonService) { }

  ngOnInit(): void {
  }

  public SubmitForm(): void{
    console.log("submit form " + this.name);
    this.common.SubmitData({name: this.name, age : 12});
  }

}
