import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChange={filterHandler} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
