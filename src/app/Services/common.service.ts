import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter: number = 0;
  constructor() { }
  public LuyThua(n: number): number{
    return n*n;
  }

  public SubmitData(data: any): void{
    console.log('Serve xu ly-- data=', data);
    
  }
}
