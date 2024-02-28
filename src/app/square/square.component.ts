import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>{{ value }}</p>
  `,
  standalone: true,
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | undefined;
}
