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
    return this.http.get<{ linkHash: string }>("https://url-shortened-back.herokuapp.com/generateLink", {params: {link: linkUrl}});
  }

  getOriginalURL(hash: string): Observable<{ link: string }> {
    return this.http.get<{ link: string }>("https://url-shortened-back.herokuapp.com/redirectLink", {params: {hash}})
  };
}
