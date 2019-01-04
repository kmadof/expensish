import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'expensish';
  values: Array<string>;
  error: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // http://expensish-api/api/values'
    this.http.get('http://localhost:3500/api/values').subscribe(
      (resp: any) => this.values = resp,
      error => console.error(error) // error path
    );
  }

}
