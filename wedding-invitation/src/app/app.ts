import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
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