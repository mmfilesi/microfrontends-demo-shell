import { Component } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.scss']
})
export class ViewHomeComponent {
  cards = [
    {
      title: 'Monkeys',
      content: 'Patrones de comunicación',
      link: '/monkeys',
      img: 'assets/images/monkeys-00.png'
    },
    {
      title: 'Frogs',
      content: 'Patrones de comunicación',
      link: '/frogs',
      img: 'assets/images/frog.png'
    },
    {
      title: 'Birds',
      content: 'Estilos encapsulados',
      link: '/birds',
      img: 'assets/images/bird.png'
    },
    {
      title: 'Sharks',
      content: 'Técnicas combinadas: iframes',
      link: '/sharks',
      img: 'assets/images/shark.png'
    }
  ];
}
