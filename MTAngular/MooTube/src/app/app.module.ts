import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { VideoDetailsUploadComponent } from './video-details-upload/video-details-upload.component';
import { VideosBoardComponent } from './videos-board/videos-board.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoDetailsUploadComponent,
    VideosBoardComponent,
    VideoUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
