import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const DeleteExpenseButton = () => {
  const { selectedExpenses, dispatch } = useContext(AppContext);

  const onDelete = () => {
    dispatch({
      type: 'DELETE_SELECTED_EXPENSE'
    });
  };

  return (
    <>
      <button
        className={`btn btn-danger ${selectedExpenses.length === 0 ? 'd-none' : ''}`}
        onClick={onDelete}
      >
        Delete Expense
      </button>
    </>
  );
};

export default DeleteExpenseButton;
