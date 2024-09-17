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
