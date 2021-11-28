import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-section-empty',
  templateUrl: './section-empty.component.html',
  styleUrls: ['./section-empty.component.scss'],
})
export class SectionEmptyComponent{
  @Input() dataCy: string | undefined;
  @Input() type: 'activity' | 'todo';
  @Output() onClick = new EventEmitter();

  onImageClick(): void {
    this.onClick.emit()
  }
}
