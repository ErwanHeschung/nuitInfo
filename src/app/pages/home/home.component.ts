import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public isPlaying = true;

  public togglePlayPause(): void {
    this.moveButton();
    const video: HTMLVideoElement | null = document.querySelector('video');

    if (video) {
      if (video.paused) {
        video.play();
        this.isPlaying = true;
      } else {
        video.pause();
        this.isPlaying = false;
      }

      
    }
  }

  public onHover(): void {
    this.moveButton();
  }

  private moveButton(): void {
    const button: HTMLElement| null = document.querySelector('.video-play-button');
    if (button) {
      const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
      const randomY = Math.random() * (window.innerHeight - button.offsetHeight);

      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  }
}
