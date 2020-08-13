import { Injectable } from '@angular/core';
import { Video } from './video';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlVid = 'http://localhost:8081/video';

  constructor(private http: HttpClient) { }

  public postVideo(video: Video) {
    console.log(video.title + ' is the one added, ' + ' its url is: ' + this.urlVid);
    return this.http.post(this.urlVid, video, {responseType: 'text' as 'json'});
  }
}
