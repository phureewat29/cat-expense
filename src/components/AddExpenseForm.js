import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import CatFact from './CatFact';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);
	const categories = [
		{ value: 'Food', label: 'Food' },
		{ value: 'Furniture', label: 'Furniture' },
		{ value: 'Accessory', label: 'Accessory' },
	]

	const [showExpenseForm, setShowExpenseForm] = useState(false);

	const [item, setName] = useState('');
	const [category, setCategory] = useState('');
	const [amount, setAmount] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			item,
			category,
			amount: Number(amount),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setAmount('');
		setCategory('');
		setShowExpenseForm(false)
	};

	const onToggleDialog = () => setShowExpenseForm(!showExpenseForm);

	return (
		<>
			<button className={`btn btn-primary mb-3 ${showExpenseForm ? 'd-none' : ''}`} onClick={onToggleDialog}>
				Add Expense
			</button>
			<form className={`border border-dark p-3 ${showExpenseForm ? '' : 'd-none'}`} onSubmit={onSubmit}>
				<CatFact />
				<div className='row'>
					<div className='col'>
						<label htmlFor='name'>Item</label>
						<input
							required='required'
							type='text'
							className='form-control'
							id='name'
							value={item}
							onChange={(event) => setName(event.target.value)}
						/>
					</div>
					<div className='col'>
						<label htmlFor='name'>Category</label>
						<select
							className='form-select'
							required='required'
							value={category}
							onChange={(event) => setCategory(event.target.value)}
						>
							<option disabled={true} value=''>Choose Category</option>
							{categories.map((c) => (
								<option key={c.value} value={c.value}>{c.label}</option>
							))}
						</select>
					</div>
					<div className='col'>
						<label htmlFor='amount'>Amount</label>
						<input
							required='required'
							type='number'
							className='form-control'
							id='amount'
							value={amount}
							min='0'
							step={0.01}
							onChange={(event) => setAmount(event.target.value)}
						/>
					</div>
				</div>
				<div className='row mt-3'>
					<div className='col'>
						<button type='submit' className='btn btn-primary'>
							Save
						</button>
						<button type='button' className='btn btn-link' onClick={onToggleDialog}>
							Close
						</button>
					</div>
				</div>
			</form >
		</>

	);
};

export default AddExpenseForm;
