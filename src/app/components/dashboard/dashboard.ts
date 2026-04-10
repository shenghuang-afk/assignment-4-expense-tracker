import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.html'
})
export class DashboardComponent {
    expenseService = inject(ExpenseService);
}