import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Risorsa } from './risorsa';

@Injectable({
  providedIn: 'root'
})
export class RisorsaService {

  private resourcesUrl = 'http://crud-rest.apps.37.187.91.6.nip.io/risorsa';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllRisorse(): Observable<Risorsa[]> {
    return this.http.get<Risorsa[]>(this.resourcesUrl)
      .pipe(
        catchError(this.handleError<Risorsa[]>('getAllRisorse', []))
      );
  }

  getRisorsa(id: string): Observable<Risorsa> {
    const url = this.resourcesUrl + '/' + id;

    return this.http.get<Risorsa>(url)
      .pipe(
        catchError(this.handleError<Risorsa>('getRisorsa'))
      );
  }

  addRisorsa(risorsa: Risorsa): Observable<Risorsa>{
    return this.http.post<Risorsa>(this.resourcesUrl, risorsa, this.httpOptions)
      .pipe(
        catchError(this.handleError<Risorsa>('addRisorsa'))
      );
  }

  updateRisorsa(risorsa: Risorsa): Observable<Risorsa>{
    return this.http.put<Risorsa>(this.resourcesUrl, risorsa, this.httpOptions)
      .pipe(
        catchError(this.handleError<Risorsa>('updateRisorsa'))
      );
  }

  deleteRisorsa(id: string): Observable<Risorsa> {
    const url = this.resourcesUrl + '/' + id;

    return this.http.delete<Risorsa>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Risorsa>('deleteRisorsa', null))
      );
  }

  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
