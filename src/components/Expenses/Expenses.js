import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card"; //wrapper
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  let expenseList = props.dataList;
  const [year, setYear] = useState();
  //console.log(expenseList);

  const yearSelectedHandler = (selectedYear) => {
    const inputYear = { ...selectedYear };
    setYear(inputYear);
    console.log(inputYear);
  };
  return (
    <div className="expenses-filter">
      <ExpensesFilter onYearSelected={yearSelectedHandler} />
      <Card className="expenses">
        {expenseList.map((data) => (
          <ExpenseItem
            id={data.id}
            expenseDate={data.expenseDate}
            expenseTitle={data.expenseTitle}
            expenseAmount={data.expenseAmount}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
