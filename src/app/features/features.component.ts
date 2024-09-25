import { Component } from '@angular/core';

interface Feature {
  title: string;
  description: string;
}
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  selectedFeature: string | null = null;

  //Battery Life
  volume: number = 50; // Default 50 | Initial volume level (percentage)
  isNoiseCancellingOn: boolean = false; // Initial noise-cancelling status
  baseBatteryLife: number = 20; // Default 20 | Base battery life at 50% volume without noise-cancelling
  batteryLife: number = this.baseBatteryLife; // Initial battery life in hours (at 50% volume without noise-cancelling)

  ngOnInit() {
    this.calculateBatteryLife();
  }

  // Function to toggle noise-cancelling on/off
  toggleNoiseCancelling() {
    this.isNoiseCancellingOn = !this.isNoiseCancellingOn;
    this.calculateBatteryLife();
  }

  // Function to calculate battery life based on current settings
  calculateBatteryLife() {
    const noiseCancellingImpact = this.isNoiseCancellingOn ? 0.85 : 1; // Default 0.75 | Reduce battery life if noise-cancelling is on
    const volumeImpact = 1 - (this.volume - 50) / 100; // Battery life decreases as volume increases (linearly from 50%)

    // Calculate final battery life based on both factors
    this.batteryLife = this.baseBatteryLife * noiseCancellingImpact * volumeImpact;
  }

  // Feature data
  featureData: { [key: string]: Feature } = {
    'ear-cups': {
      title: 'Comfortable Ear Cups',
      description: 'The ear cups are designed for maximum comfort, allowing you to wear the headphones for long periods without discomfort.'
    },
    'headband': {
      title: 'Adjustable Headband',
      description: 'The headband is fully adjustable and padded, offering a comfortable fit for all head sizes.'
    },
    'noise-cancelling': {
      title: 'Advanced Noise Cancelling',
      description: 'Our advanced noise-cancelling technology blocks out unwanted background noise, ensuring an immersive audio experience.'
    }
  };

  // Show feature description based on clicked area
  showFeature(featureKey: string) {
    this.selectedFeature = featureKey;
  }
}
