import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  name:string = '';
  public formData:FormGroup = new FormGroup({name: new FormControl(''),
                                              age: new FormControl('')
                                                  });
  public formData2 = this.formBuilder.group({
    name : ['', Validators.required],
    age : ['', Validators.required]
  });
  constructor(private common:CommonService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  OnSubmit(): void {
    // console.log("submit form " , this.formData.value);
    this.common.SubmitData(this.formData2.value)
  }

}
