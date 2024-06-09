import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Input() totalProducts: number = 0;
  @Input() checkedProducts: number = 0;
  @Input() pageSize : number = 0;
  @Input() currentPage : number = 0;
}