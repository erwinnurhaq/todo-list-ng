import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DateString } from 'src/app/helpers/dateString';
import { Activity } from 'src/app/models';

@Component({
  selector: 'app-home-activity-card',
  templateUrl: './home-activity-card.component.html',
  styleUrls: ['./home-activity-card.component.scss'],
})
export class HomeActivityCardComponent {
  @Input() activity: Activity;
  @Output() onDelete = new EventEmitter();

  constructor(private router: Router, private dateString: DateString) {}

  getDateString(value: string): string {
    return this.dateString.format(value);
  }

  onViewDetailClick(): void {
    this.router.navigate(['detail', this.activity.id]);
  }

  onDeleteClick(): void {
    this.onDelete.emit();
  }
}
