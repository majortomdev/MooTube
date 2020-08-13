import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Video } from './../video';

//this ts file needs to take the values in the inputs and send them to the POST
//video endpoint on my API

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
    console.log('iv made it to the vduc.ts.saveVideo() method with ' + this.video.title);
    return this.httpService.postVideo(this.video);
  }



}
