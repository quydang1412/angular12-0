import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private httpServerService: HttpServerService) { }

  ngOnInit(): void {
    const payLoad ={ 
      "body": "body 3",
      "postId": 3
    };
    this.httpServerService.postComments(payLoad).subscribe(data => {
      console.log('postdata :', data);
    });
  }

}
