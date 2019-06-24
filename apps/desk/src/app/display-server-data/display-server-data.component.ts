import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Message } from '@desk/api-interface';

@Component({
  selector: 'desk-display-server-data',
  templateUrl: './display-server-data.component.html',
  styleUrls: ['./display-server-data.component.scss']
})
export class DisplayServerDataComponent implements OnInit {
  hello$ = this.http.get<Message>("/api/hello");

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
