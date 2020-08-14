import { Video } from './../video';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-videos-board',
  templateUrl: './videos-board.component.html',
  styleUrls: ['./videos-board.component.scss']
})
export class VideosBoardComponent implements OnInit {
  title = 'Videos On Our Server';
  constructor(private httpService: HttpService) { }

  videosArray: Video [];
  ngOnInit() {

    return this.httpService.getVids().subscribe(
      res => {
        this.videosArray = res as Video[];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }






}
