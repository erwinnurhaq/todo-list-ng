import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent {
  @Input() isLoading: boolean = false;
  @Output() onAddActivity = new EventEmitter();

  onAddActivityClick(): void {
    this.onAddActivity.emit();
  }
}
