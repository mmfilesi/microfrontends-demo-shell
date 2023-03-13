import { Component } from '@angular/core';

/** Ejemplo de cómo integrar dos técnicas */

@Component({
  selector: 'app-view-sharks',
  templateUrl: './view-sharks.component.html',
  styleUrls: ['./view-sharks.scss']
})
export class ViewSharksComponent {
  elementUrl = './assets/apps/shark/main.js';
}
