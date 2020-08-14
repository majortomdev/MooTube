import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosBoardComponent } from './videos-board/videos-board.component';
import { VideoDetailsUploadComponent } from './video-details-upload/video-details-upload.component';

const routes: Routes = [
  { path: '', component: VideosBoardComponent},
  { path: 'post', component: VideoDetailsUploadComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
