import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedScreenData } from '@desk/api-interface';
import { SharedScreenService } from './shared-screen.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedScreenDefaultService implements SharedScreenService {
  sharedScreenData$ = this.http.get<SharedScreenData>("/api/shared-screen-data");
  
  constructor(private http: HttpClient) { }
}
