import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  envelopeOpen = false;
  envelopeOpening = false;
  envelopeFading = false;

  openEnvelope() {
    if (this.envelopeOpening) return;
    this.envelopeOpening = true;
    // After flap opens and letter rises, wait a moment, then fade out
    setTimeout(() => {
      this.envelopeFading = true;
    }, 2200);
    // Remove overlay from DOM after fade animation completes
    setTimeout(() => {
      this.envelopeOpen = true;
    }, 3000);
  }

  events = [
    {
      icon: 'civic',
      title: 'Граждански ритуал',
      time: '15:30',
      location: 'Обреден дом Асеновград',
    },
    {
      icon: 'church',
      title: 'Църковен ритуал',
      time: '16:30',
      location: 'Храм "Св. Георги"',
    },
    {
      icon: 'party',
      title: 'Сватбено тържество',
      time: '18:00',
      location: 'Ресторант',
    },
  ];
}