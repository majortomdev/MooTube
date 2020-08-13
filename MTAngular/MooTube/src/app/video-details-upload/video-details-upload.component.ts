import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Video } from './../video';


@Component({
  selector: 'app-video-details-upload',
  templateUrl: './video-details-upload.component.html',
  styleUrls: ['./video-details-upload.component.scss']
})
export class VideoDetailsUploadComponent implements OnInit {

 video: Video = new Video(); // video: Video = new Video('' , 0 , '' , '' , '');

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  saveVideo() {
    return this.httpService.postVideo(this.video).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  getVideos() {
    return this.httpService.getVids().subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
