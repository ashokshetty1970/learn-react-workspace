import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [editing, setEditing] = useState(false);
    const onSaveDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpenseData(expenseData);
        setEditing(false);
    };
    const onClickHandler = ()=> {
      setEditing(true)
    };
    const onCancelHandler = ()=>{
        setEditing(false);
    }

        return  <div className='new-expense'>
            {!editing && <button onClick={onClickHandler}>Add New Expense</button>}
            {editing && <ExpenseForm
                onSaveData={onSaveDataHandler}
                onCancel={onCancelHandler}/>}
        </div>

};

export default NewExpense;
