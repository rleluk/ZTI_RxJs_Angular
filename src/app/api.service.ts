import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGryffindor(): Observable<any[]> {
    return this.http.get<any[]>('http://hp-api.herokuapp.com/api/characters/house/Gryffindor');
  }

  getAni(): Observable<any[]> {
    return this.http.get<{results: any[]}>('https://swapi.dev/api/people').pipe(map(x => x.results));
  }
}
