import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard'; 
import { AddExpenseComponent } from './components/add-expense/add-expense';
import { ExpenseListComponent } from './components/expense-list/expense-list';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: AddExpenseComponent },
  { path: 'expenses', component: ExpenseListComponent }
];