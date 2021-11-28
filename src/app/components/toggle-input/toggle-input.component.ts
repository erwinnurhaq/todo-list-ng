import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-input',
  templateUrl: './toggle-input.component.html',
  styleUrls: ['./toggle-input.component.scss'],
})
export class ToggleInputComponent {
  @Input() id: string = 'checkbox';
  @Input() isChecked: boolean = false;
  @Output() onChange = new EventEmitter();

  change(event: Event): void {
    this.onChange.emit(event);
  }
}
