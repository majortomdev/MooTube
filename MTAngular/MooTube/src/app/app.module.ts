import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideoDetailsUploadComponent } from './video-details-upload/video-details-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoDetailsUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    //,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
