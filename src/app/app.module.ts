import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { MainHeaderComponent } from './layouts/main-header/main-header.component';
import { HomeHeaderComponent } from './layouts/home-header/home-header.component';
import { HomeActivityCardComponent } from './layouts/home-activity-card/home-activity-card.component';
import { DetailHeaderComponent } from './layouts/detail-header/detail-header.component';
import { SectionEmptyComponent } from './layouts/section-empty/section-empty.component';
import { ToggleInputComponent } from './components/toggle-input/toggle-input.component';
import { CommonButtonComponent } from './components/common-button/common-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    MainHeaderComponent,
    ToggleInputComponent,
    CommonButtonComponent,
    HomeHeaderComponent,
    HomeActivityCardComponent,
    DetailHeaderComponent,
    SectionEmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
