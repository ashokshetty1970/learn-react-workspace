import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import {ExpenseFilter} from "../ExpenseFilter/ExpenseFilter";
import {useState} from "react";
import {ExpensesList} from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";

function Expenses(props) {
    const [year, setYear] = useState('2020');
    const yearChangeHandler = (selectedYear) => {
      setYear(selectedYear);
    };
    const filtered = props.items.filter((expense)=> year === 'All' || expense.date.getFullYear().toString() === year);
    let expenseContent = <p>No expenses found for the year {year}</p>
    if(filtered.length > 0) {
        expenseContent = filtered.map( (expense) => <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>)
    }
    return (
        <Card className="expenses">
            <ExpenseFilter selected={year} onYearChange={yearChangeHandler}/>
            <ExpensesChart expenses={filtered}/>
            <ExpensesList items={filtered} />
        </Card>
    );
}

export default Expenses;
