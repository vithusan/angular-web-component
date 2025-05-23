import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-box.component.html',
})
export class InputBoxComponent {
  @Input() value: string = '';

  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    
  
    const customEvent = new CustomEvent('value-changed', {
      detail: this.value,
      bubbles: true,
      composed: true
    });
    input.dispatchEvent(customEvent);
  }
}
