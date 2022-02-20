import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  constructor(private http: HttpClient) {}

  getMessages(): Observable<any> {
    return of([]);
  }

  // getMessages(): Observable<any> {
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  // }
}
