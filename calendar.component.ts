import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  today = new Date().getDate();
  daysInMonth = 31;
  firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
  generateCalendarMatrix(): number[][] {
    const calendar = [];
    const totalCells = this.firstDayOfMonth + this.daysInMonth;
    const weeks = Math.ceil(totalCells / 7);
    let day = 1;
  
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < 7; d++) {
        const cellIndex = w * 7 + d;
        if (cellIndex < this.firstDayOfMonth || day > this.daysInMonth) {
          week.push(0); // empty cell
        } else {
          week.push(day++);
        }
      }
      calendar.push(week);
    }
    return calendar;
  }
}  
