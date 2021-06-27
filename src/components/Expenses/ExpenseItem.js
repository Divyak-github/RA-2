import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  //state
  const [title, setTitle] = useState(props.expenseTitle);
  const [counter, setCounter] = useState(true);

  //User Events
  const clickHandler = () => {
    setCounter(counter ? false : true);
    setTitle(title + " " + counter);
  };

  //return
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.expenseDate} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">AU ${props.expenseAmount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </div>
  );
};

export default ExpenseItem;
