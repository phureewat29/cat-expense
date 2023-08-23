import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'SET_SELECTED_EXPENSE':
			const expenseId = action.payload;
			let selectedExpenses = state.selectedExpenses;
			if (selectedExpenses.includes(expenseId)) {
				selectedExpenses = selectedExpenses.filter((id) => id !== expenseId);
			} else {
				selectedExpenses = [...selectedExpenses, expenseId];
			}
			return {
				...state,
				selectedExpenses
			};
		case 'DELETE_SELECTED_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => !state.selectedExpenses.includes(expense.id)
				),
				selectedExpenses: []
			};

		default:
			return state;
	}
};

const initialState = {
	expenses: [
		{ id: uuidv4(), item: 'Smart Heart', category: 'Food', amount: 599 },
		{ id: uuidv4(), item: 'Corgi Doll', category: 'Furniture', amount: 199 },
		{ id: uuidv4(), item: 'Diamond Cat Collar', category: 'Accessory', amount: 1599 },
	],
	selectedExpenses: []
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				selectedExpenses: state.selectedExpenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
