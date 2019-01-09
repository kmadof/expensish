import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PlatformLocation } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'expensish';
  values: Array<string>;
  error: string;

  constructor(private http: HttpClient, private platformLocation: PlatformLocation) { }

  ngOnInit(): void {
    const baseUrl = (this.platformLocation as any).location.href as string;
    const basePort = (this.platformLocation as any).location.port as string;
    const apiBaseUrl = baseUrl.replace(basePort, '8081');

    this.http.get(apiBaseUrl + 'api/values').subscribe(
      (resp: any) => this.values = resp,
      error => console.error(error) // error path
    );
  }

}
