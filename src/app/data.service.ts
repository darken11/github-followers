import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import {catchError} from'rxjs/operators';

@Injectable()
export class DataService{
    constructor(private url:string,private http:HttpClient){

    }

    getAll():Observable<any[]>{
        return this.http.get<any[]>(this.url).pipe(
            catchError(this.handleError));
    }
    creat(resource):Observable<any>{
       return  this.http.post<any>(this.url,resource).pipe(
        catchError(this.handleError));
    }
    update(resource:any):Observable<any>{
        
        return this.http.put<any>(this.url+'/'+resource.id,resource).pipe(
            catchError(this.handleError));
    }
    delete(resource:any){
        return this.http.delete(this.url+'/'+resource.id).pipe(
            catchError(this.handleError));
    }




    handleError(error: HttpErrorResponse) {
        let errorMessage ;
        if (error.status === 404) {
          // Client-side errors
          errorMessage = ` ${error.message}`;
        } if (error.status === 400) {
            // Client-side errors
            errorMessage = ` ${error.message}`;
        }else {
          // Server-side errors
          errorMessage = `Error Code: ${error.status}\nMessageError ${error.message};
          }`;
        }
        console.log(error.message);
        return throwError(errorMessage);
      }
}