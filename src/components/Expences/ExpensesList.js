import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((expenseItem) => {
				return (
					<ExpenseItem
						key={expenseItem.id}
						title={expenseItem.title}
						date={expenseItem.date}
						amount={expenseItem.amount}
					/>
				);
			})}
		</ul>
	);
}

export default ExpensesList;
