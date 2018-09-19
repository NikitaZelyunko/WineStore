import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {Vine} from './Vine';
const url = 'src/app/data.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getVines(): Observable<Vine[]> {
    return this.http.get(url).pipe(map(
      (vines: Array<Object>) => vines.map(
        vine => new Vine(
        vine['id'], vine['title'], vine['price'],
        vine['type'], vine['declaration']))
  ));
  }

  getVine(id: number): Observable<Vine> {
    return this.http.get(url).pipe(map(
      (vines: Array<Object>) => Vine.fromObject(vines.filter(
        vine => vine['id'] === id)[0]))
      );
  }
}
