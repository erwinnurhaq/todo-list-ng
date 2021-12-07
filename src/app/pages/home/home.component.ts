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
  activities: ActivityGroup | undefined;
  isLoading: boolean = true;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getActivities();
  }

  ngOnDestroy(): void {
    this.activitiesSub?.unsubscribe();
  }

  getActivities(): void {
    this.activitiesSub?.unsubscribe();
    this.activitiesSub = this.httpService.getActivities().subscribe({
      next: (result) => {
        this.activities = result;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  onAddActivity(): void {
    this.isLoading = true;
    this.activitiesSub?.unsubscribe();
    this.activitiesSub = this.httpService.postActivity().subscribe({
      next: () => {
        this.getActivities()
      },
      error: (error: any) => {
        console.log(error);
      },
    })
  }

  onConfirmDelete(id: number): void {
    console.log('onConfirmDelete', id);
  }
}
