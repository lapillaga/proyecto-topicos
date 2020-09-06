import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class YenaServiceService {
    baseUrl: string = environment.baseUrl;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/sparql-results+json,*/*;q=0.9',
        }),
    };

    constructor(private http: HttpClient) {
    }

    // POST
    createQuery(query: string): Observable<any> {
        const body = new HttpParams()
            .set(`query`, query);
        return this.http
            .post<any>(this.baseUrl, body.toString(), this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

    private log(message: string) {
        console.log(message);
    }
}
