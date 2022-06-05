import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOM = 'https://randomuser.me/api/?results=';
  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  constructor(private httpClient:HttpClient) { }
  public getComments(): Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOption)
  }
  public getRandomUser(users:number=1): Observable<any>{
    const url = `${this.REST_API_SERVER_RANDOM}`+users;
    return this.httpClient.get<any>(url, this.httpOption)
  }
  public postComments(payload: any):Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    console.log('postCommentUrl:  ',url);
    console.log('postComment-PayLoad:  ',payload);
    return this.httpClient.post<any>(url,payload , this.httpOption);
  }


}
