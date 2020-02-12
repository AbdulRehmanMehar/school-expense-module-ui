export interface Budget {
  id?: string;
  amount: string;
  description?: string;
  date: string;
  issued_by: string;
  module: string;
}


export interface BudgetState {
  budget: Budget[];
  working: boolean;
  error: string;
}
