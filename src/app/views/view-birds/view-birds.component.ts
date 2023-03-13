import { Component } from '@angular/core';

/** Componente para mostrar cómo funcionan los estilos encapsulados. */

@Component({
  selector: 'app-view-birds',
  templateUrl: './view-birds.component.html',
  styleUrls: ['./view-birds.scss']
})
export class ViewBirdsComponent {
  /* Url donde se encuentra el js del compo */
  elementUrl = './assets/apps/birds/main.js';
}
