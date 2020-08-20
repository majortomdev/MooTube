import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.scss']
})
export class VideoUploadComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  file: File;

  selectFile(event) {
    this.file = event.target.file;
  }

  ngOnInit() {
  }

  uploadVideo() {
      return this.httpService.uploadVideo(this.file).subscribe(
        res => {
          console.log('Posted Bins');
        }
      )
  }


}
