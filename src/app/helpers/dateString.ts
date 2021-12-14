import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateString {
  private _month = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  format(dateString: string): string {
    const date = new Date(dateString);
    const formattedDate = `${String(date.getDate()).padStart(2, '0')} ${this._month[date.getMonth()]} ${date.getFullYear()}`;
    return formattedDate;
  }
}
