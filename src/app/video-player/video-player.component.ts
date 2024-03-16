import { Component, ElementRef, ViewChild } from '@angular/core';
import { faPlay, faPause, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

declare var videojs: any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})

export class VideoPlayerComponent {
  @ViewChild('target', { static: true }) target!: ElementRef;

  videoLink = 'https://vjs.zencdn.net/v/oceans.mp4';

  options = {
    autoplay: false,
    notSupportedMessage: 'Invalid Video URL',
    source: {
      src: this.videoLink,
      type: 'video/mp4'
    }
  }

  player!: any;

  ngAfterViewInit(): void {
    videojs(this.target.nativeElement, this.options);
  }

  btnPlay() {
    this.isPlay = true
    this.player = videojs(this.target.nativeElement, this.options).play();
  }

  btnPause() {
    this.isPlay = false
    this.player = videojs(this.target.nativeElement, this.options).pause();
  }

  btnReplay() {
    this.player = videojs(this.target.nativeElement, this.options);
    this.player.currentTime(0);
    this.player.play();
  }

  faPlay = faPlay;
  faPause = faPause;
  faRotateLeft = faRotateLeft;

  isPlay: boolean = false
}