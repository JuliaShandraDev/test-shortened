import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

<<<<<<< HEAD
  getShorterURL({linkUrl}: { linkUrl: string }): Observable<{ linkHash: string }> {
    return this.http.get<{ linkHash: string }>('http://localhost:3000/api/generateLink', {params: {link: linkUrl}});
  }

  getOriginalURL(hash: string): Observable<{ link: string }> {
    return this.http.get<{ link: string }>('http://localhost:3000/api/redirectLink', {params: {hash}});
=======
  getShorterURL({linkUrl}: { linkUrl: string }): Observable<{ shorterLink: string }> {
    return this.http.get<{ shorterLink: string }>('', {params: {linkUrl}});
  }

  getOriginalURL(hash: string): Observable<{ originalLink: string }> {
    return this.http.get<{ originalLink: string }>('', {params: {hash}});
>>>>>>> c74fbed1f9440c693c58fa2762ef3c54cfc6739b
  }
}
