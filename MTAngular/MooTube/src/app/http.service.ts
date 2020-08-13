import { Injectable } from '@angular/core';
import { Video } from './video';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlVid = 'http://localhost:8081/video';

  constructor(private http: HttpClient) { }


  postVideo(video: Video): Observable<any> {
    return this.http.post<any>(this.urlVid, video);
}


  getVids(): Observable<any> {
    return this.http.get(this.urlVid);
  }
}
