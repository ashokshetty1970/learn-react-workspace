import logo from './logo.svg';
import './App.css';
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'Samsung TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
const App = ()=> {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseDataHandler = (expense) =>{
        // console.log(expense);
        setExpenses((prevExpenses)=>{
            return [expense, ...prevExpenses];
        });
    }
    return (
        <div>
            <NewExpense  onAddExpenseData={addExpenseDataHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
