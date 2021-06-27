import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date("2019-01-01"));

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      expenseDate: new Date(date),
      expenseTitle: title,
      expenseAmount: amount,
    };
    props.onSaveExpense(expenseData);
  };

  const clearHandler = () => {
    setTitle("");
    setAmount(0);
    setDate(new Date());
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            max="10"
            value={amount}
            onChange={amountChangeHandler}
            placeholder="$ 0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2016-09-17"
            max="2021-09-21"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Submit</button>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={clearHandler}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
