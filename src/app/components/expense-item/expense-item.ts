import { Component, Input, inject } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense-service';

@Component({
    selector: 'app-expense-item',
    standalone: true,
    templateUrl: './expense-item.html'
})
export class ExpenseItemComponent {
    @Input() expense!: Expense;

    expenseService = inject(ExpenseService);

    deleteExpense(): void {
        this.expenseService.deleteExpense(this.expense.id);
    }

    isHighExpense(): boolean {
        return this.expense.amount > 100;
    }

    getCategoryColor(): string {
        switch (this.expense.category) {
            case 'Food':
                return 'orange';
            case 'Travel':
                return 'blue';
            case 'Shopping':
                return 'purple';
            case 'Grocery':
                return 'green';
            default:
                return 'black';
        }
    }
}