import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ExpenseCategory } from '../../models/expense';
import { ExpenseService } from '../../services/expense-service';

@Component({
    selector: 'app-edit-expense',
    standalone: true,
    imports: [FormsModule, RouterLink],
    templateUrl: './edit-expense.html'
})
export class EditExpenseComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    expenseService = inject(ExpenseService);

    id = '';
    title = '';
    amount = 0;
    category: ExpenseCategory = 'Personal';

    ngOnInit(): void {
        const expenseId = this.route.snapshot.paramMap.get('id');

        if (!expenseId) {
            this.router.navigate(['/expenses']);
            return;
        }
        const expense = this.expenseService.getExpenseById(expenseId);
        if (!expense) {
            this.router.navigate(['/expenses']);
            return;
        }
        this.id = expense.id;
        this.title = expense.title;
        this.amount = expense.amount;
        this.category = expense.category;
    }

    updateExpense(): void {
        if (!this.title.trim() || this.amount <= 0) {
            return;
        }
            this.expenseService.editExpense({
            id: this.id,
            title: this.title,
            amount: this.amount,
            category: this.category
        });
        this.router.navigate(['/expenses']);
    }
}