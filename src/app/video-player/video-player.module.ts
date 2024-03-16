import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideoPlayerComponent } from './video-player.component';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [
    VideoPlayerComponent
  ]
})

export class VideoPlayerModule {

}