import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateString {
  private MONTH_LONG = [
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
    const formattedDate = `${String(date.getDate()).padStart(2, '0')} ${
      this.MONTH_LONG[date.getMonth()]
    } ${date.getFullYear()}`;
    return formattedDate;
  }
}
