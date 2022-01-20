import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getShorterURL({linkUrl}: { linkUrl: string }): Observable<{ shorterLink: string }> {
    return this.http.get<{ shorterLink: string }>('', {params: {linkUrl}});
  }

  getOriginalURL(hash: string): Observable<{ originalLink: string }> {
    return this.http.get<{ originalLink: string }>('', {params: {hash}});
  }
}
