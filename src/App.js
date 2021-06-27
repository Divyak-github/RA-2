import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const initialList = [
    {
      id: 1,
      expenseDate: new Date(2021, 6, 26),
      expenseTitle: "Car Insurance",
      expenseAmount: 12,
    },
    {
      id: 2,
      expenseDate: new Date(2021, 6, 26),
      expenseTitle: "Car Insurance",
      expenseAmount: 123,
    },
  ];

  const [items, setItems] = useState(initialList);
  const saveAppExpenseHandler = (expense) => {
    const newItem = {
      id: 4,
      ...expense,
    };
    const newList = initialList.concat(newItem);
    setItems(newList);
  };
  return (
    <div>
      <NewExpense onSaveAppExpense={saveAppExpenseHandler} />
      <Expenses dataList={items} />
    </div>
  );
};

export default App;
