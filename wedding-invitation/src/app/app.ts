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
  showNextButton = false;

  openEnvelope() {
    if (this.envelopeOpening) return;
    this.envelopeOpening = true;
    // After flap opens and letter rises, show the next button
    setTimeout(() => {
      this.showNextButton = true;
    }, 1800);
  }

  goToDetails() {
    this.envelopeFading = true;
    // Remove overlay from DOM after fade animation completes
    setTimeout(() => {
      this.envelopeOpen = true;
    }, 800);
  }

  scrollToEvents() {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  }

  events = [
    {
      icon: 'church',
      title: 'Църковен ритуал',
      time: '15:00',
      location: 'Бачковски Манастир',
      mapUrl: 'https://maps.app.goo.gl/pidALxaHRqw5dTLBA',
    },
    {
      icon: 'civic',
      title: 'Граждански ритуал',
      time: '18:30',
      location: 'Хотел Сани (гр. Асеновград) - Ресторант - Тераса',
      mapUrl: 'https://maps.app.goo.gl/K3eiEifwKFwkxv9j6',
    },
    {
      icon: 'party',
      title: 'Сватбено тържество',
      time: '19:30',
      location: 'Хотел Сани (гр. Асеновград) - Ресторант',
      mapUrl: 'https://maps.app.goo.gl/K3eiEifwKFwkxv9j6',
    },
  ];
}
