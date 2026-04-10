import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { ExpenseItemComponent } from '../expense-item/expense-item';


@Component({
    selector: 'app-expense-list',
    standalone: true,
    imports: [ExpenseItemComponent],
    templateUrl: './expense-list.html'
})
export class ExpenseListComponent {
    expenseService = inject(ExpenseService);
}