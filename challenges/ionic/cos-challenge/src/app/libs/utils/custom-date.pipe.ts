import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(seconds: number): string {

    const hours   = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - (hours * 3600)) / 60);
    seconds = seconds - (hours * 3600) - (minutes * 60);

    const hoursDisplayed = hours > 9 ? `${hours}h` : `0${hours}h`;
    const minutesDisplayed = minutes > 9 ? `${minutes}m` : `0${minutes}m`;
    const secondsDisplayed = seconds > 9 ? `${seconds}s` : `0${seconds}s`;


    return `${hoursDisplayed}:${minutesDisplayed}:${secondsDisplayed}`;
  }

}
