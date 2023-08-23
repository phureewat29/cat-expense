import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
	const { expenses, selectedExpenses, dispatch } = useContext(AppContext);

	const highestSpendingCategory = expenses.reduce((accumulator, current) => accumulator.amount > current.amount ? accumulator : current, 0);

	const handleRowSelection = (expenseId) => {
		dispatch({
			type: 'SET_SELECTED_EXPENSE',
			payload: expenseId,
		});
	};

	return (
		<>
			<table className='table'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Item</th>
						<th scope='col'>Category</th>
						<th scope='col'>Amount</th>
					</tr>
				</thead>
				<tbody>
					{expenses.map((expense) => (
						<tr key={expense.id} className={highestSpendingCategory.category === expense.category ? 'table-primary' : ''}>
							<th scope='row'>
								<div className='custom-control custom-checkbox'>
									<input
										type='checkbox'
										id={expense.id}
										checked={selectedExpenses.includes(expense.id)}
										onChange={() => handleRowSelection(expense.id)}
									/>
								</div>
							</th>
							<td>{expense.item}</td>
							<td>{expense.category}</td>
							<td>${expense.amount}</td>
						</tr>
					))}
				</tbody>
			</table >
		</>
	);
};

export default ExpenseList;
