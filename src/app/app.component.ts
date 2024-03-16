import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoPlayerModule } from './video-player/video-player.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoPlayerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
}
