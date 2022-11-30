import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
	const [isEditing, setIsEditing] = useState(false);

	function saveExpenseDataHandler(enteredExpenseData) {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onSaveExpenseData(expenseData);
	}

	function startEditingHandler() {
		setIsEditing(true);
	}

	function cancelEditingHandler() {
		setIsEditing(false);
	}

	return (
		<div className="new-expense">
			{!isEditing && ( // is editing false ise and operatorünün yanındaki butonu gösteriyor.
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}

			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					cancelHandler={cancelEditingHandler}
				/>
			)}
		</div>
	);
}
export default NewExpense;
