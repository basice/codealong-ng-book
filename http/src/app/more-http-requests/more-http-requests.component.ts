import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-http-requests',
  templateUrl: './more-http-requests.component.html',
  styleUrls: ['./more-http-requests.component.css']
})
export class MoreHttpRequestsComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  makePost() {
    this.loading = true;
    this.http
      .post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
        })
      )
      .subscribe(data => {
          this.data = data;
          this.loading = false;
        }
      );
  }

  makeDelete() {
    this.loading = true;
    this.http
      .delete('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makeHeaders() {
    const headers: HttpHeaders = new HttpHeaders({
      'X-API-TOKEN': 'ng-book'
    });

    const req = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        headers: headers
      }
    );

    this.http.request(req).subscribe(data => {
      this.data = data['body'];
    });
  }
}
