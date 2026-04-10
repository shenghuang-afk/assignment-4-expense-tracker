import { Injectable, signal, computed } from '@angular/core';
import { Expense, ExpenseCategory } from '../models/expense';

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {
    expenses = signal<Expense[]>([
    {
        id: '1',
        title: 'Groceries',
        amount: 85.50,
        category: 'Grocery'
    },
    {
        id: '2',
        title: 'Gas',
        amount: 40.00,
        category: 'Travel'
    }
]);

    categories = signal<ExpenseCategory[]>([
        'Work',
        'Personal',
        'Grocery',
        'Utilities',
        'Shopping',
        'Travel',
        'Food'
    ]);

    totalExpense = computed(() =>
        this.expenses().reduce((sum, expense) => sum + expense.amount, 0)
    );

    highestExpense = computed(() => {
        const list = this.expenses();
        if (list.length === 0) return 0;
        return Math.max(...list.map(expense => expense.amount));
    });

    averageExpense = computed(() => {
        const list = this.expenses();
        if (list.length === 0) return 0;
        return this.totalExpense() / list.length;
    });

    transactionCount = computed(() => this.expenses().length);

    addExpense(expense: Expense): void {
        this.expenses.update(current => [...current, expense]);
    }

    deleteExpense(id: string): void {
        this.expenses.update(current =>
        current.filter(expense => expense.id !== id)
        );
    }
}