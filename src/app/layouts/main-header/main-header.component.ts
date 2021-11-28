import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  theme: string = 'dark';

  constructor() {}

  ngOnInit(): void {
    this.theme = localStorage.getItem('theme') || 'light';
  }

  toggleTheme(event: Event): void {
    this.theme = (<HTMLInputElement>event.target).checked ? 'light' : 'dark';
    localStorage.setItem('theme', this.theme)
    document.documentElement.setAttribute('data-theme', this.theme);
  }
}
