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
    this.http.get('expensish-api/api/values').subscribe(
      (resp: Array<string>) => this.values = resp,
      error => this.error = error // error path
    );
  }

}
