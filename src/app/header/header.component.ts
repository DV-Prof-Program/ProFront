import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMuffled = false;
  audioPlayer: HTMLAudioElement | null = null;

  ngOnInit() {
    // Get the audio element
    this.audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
  }

  toggleMuffle() {
    if (this.audioPlayer) {
      if (this.isMuffled) {
        // Reset to normal sound
        this.audioPlayer.playbackRate = 1;
        this.audioPlayer.volume = 1;
      } else {
        // Muffle the sound by lowering the volume and playback rate
        this.audioPlayer.playbackRate = 0.75; // Slow down the audio
        this.audioPlayer.volume = 0.1; // Lower the volume
      }
      this.isMuffled = !this.isMuffled;
    }
  }
}
