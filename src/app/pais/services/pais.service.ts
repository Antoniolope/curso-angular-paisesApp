import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v2/';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${termino}`;
    // return this.http.get(url).pipe(catchError( err => of(['Hol muinfo'])));
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this._apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams })
    // .pipe(tap(console.log));
  }
  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
function tap(log: { (...data: any[]): void; (message?: any, ...optionalParams: any[]): void; }): import("rxjs").OperatorFunction<Country[], Country[]> {
  throw new Error('Function not implemented.');
}

