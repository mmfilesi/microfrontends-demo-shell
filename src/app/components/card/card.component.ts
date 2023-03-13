import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title = '';
  @Input() content = '';
  @Input() link = '';
  @Input() img = '';

  constructor(private router: Router) {}

  setView() {
    this.router.navigate([this.link]);
  }
}
