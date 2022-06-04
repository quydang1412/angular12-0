import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name: string = 'Quy';
  public age: any = 15;
  public caption: string = '';
  public traicays:any = ['tao', 'nho', 'coc', 'xoai', 'oi'];
  public traicay2s: any = [{ten: 'tao', gia: 7, hagia: true},
                            {ten: 'nho', gia: 20,  hagia: false}];
  public traicay: string = '';
  public districts: any = ['Quan-huyen'];
  public ind: any = '';
  public cities = [
    {
      city: 'Chon thanh pho',
      district:['Quan-huyen']
    },
    {
      city: 'An Giang', 
      district:[
                'Long Xuyen',
                'Tan Chau',
                'Chau Doc',
                'An Phu']
    },
    {city:'Hue', 
    district:[
              'Phu Bai',
              'TP.Hue',
              'Phu Loc']
    }
                  ];
  constructor() { }

  ngOnInit(): void {
    // console.log('trai cay =',this.traicays);
    console.log('cities =', this.cities);
  }

  CheckAge(){
    // this.age =  document.getElementById('age');
    // this.ngOnInit();
    console.log(this.age);
    // this.ngOnInit();
    if(this.age > 18){
      this.caption = 'Ban da gia roi';
    }else{
      this.caption = 'Ban con tre';
    }
     

  }

  Resetinput(){
    this.name = '';
    this.age = '';
  }

  SelectClick(event:any){
    console.log(event.target.value);
    const city = event.target.value;
    if(!city){
      return;
    }

    //cach 1
    // const search = this.cities.filter(data => data.city === city);
    // if(search && search.length > 0){
    //   this.districts = search[0].district;
    // }
    

    //cach2
    this.districts = this.cities.find( data => data.city === city)?.district||[];
  }

}
