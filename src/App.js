import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import DeleteExpenseButton from './components/DeleteExpenseButton';

const App = () => {
	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'>Cat Expense</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row'>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<div className='row'>
					<div className='col-sm'>
						<DeleteExpenseButton />
					</div>
				</div>
			</div>
		</AppProvider >
	);
};

export default App;
