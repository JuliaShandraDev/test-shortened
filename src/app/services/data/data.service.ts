import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getShorterURL({linkUrl}: { linkUrl: string }): Observable<{ linkHash: string }> {
    return this.http.get<{ linkHash: string }>('http://localhost:3000/api/generateLink', {params: {link: linkUrl}});
  }

  getOriginalURL(hash: string): Observable<{ link: string }> {
    return this.http.get<{ link: string }>('http://localhost:3000/api/redirectLink', {params: {hash}});

  }
}
