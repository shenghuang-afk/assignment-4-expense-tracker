import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../services/expense-service';
import { ExpenseCategory } from '../../models/expense';

@Component({
    selector: 'app-add-expense',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './add-expense.html'
})
    export class AddExpenseComponent {
    expenseService = inject(ExpenseService);

    title = '';
    amount = 0;
    category: ExpenseCategory = 'Personal';

    addExpense(): void {
        if (!this.title.trim() || this.amount <= 0) {
            return;
        }

        this.expenseService.addExpense({
            id: Date.now().toString(),
            title: this.title,
            amount: this.amount,
            category: this.category
        });

        this.title = '';
        this.amount = 0;
        this.category = 'Personal';
    }
}