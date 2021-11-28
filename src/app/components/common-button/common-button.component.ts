import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent {
  @Input() type: string = 'button';
  @Input() color: string = 'primary';
  @Input() isDisabled: boolean = false;
  @Input() dataCy: string | undefined;
  @Output() onClick = new EventEmitter();

  onButtonClick(event: Event): void {
    this.onClick.emit(event)
  }
}
