import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivityGroup } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  activitiesSub: Subscription;
  activities: ActivityGroup | undefined = undefined;
  isLoading: boolean = false;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getActivities();
  }

  ngOnDestroy(): void {
    this.activitiesSub?.unsubscribe();
  }

  getActivities(): void {
    this.activitiesSub = this.httpService
      .getActivities()
      .subscribe((result) => {
        console.log(result);
        this.activities = result;
      });
  }

  onAddActivity(): void {
    console.log('onAddActivity');
  }

  onConfirmDelete(id: number): void {
    console.log('onConfirmDelete', id)
  }
}
