import { useDispatch } from "react-redux";
import classes from "./ExpenseItem.Module.css";
import { expenseActions } from "../../store/expense-slice";

const ExpenseItem = (props) => {
  const { amount, description, category, id } = props.item;
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");

  const dispatch = useDispatch();

  const deleteExpenseHandler = (props) => {
    fetch(
      `https://expense-tracker-acd04-default-rtdb.firebaseio.com/${email}/${id}.json`,
      {
        method: "DELETE",
      }
    );

    dispatch(expenseActions.removeExpense(id));
  };

  const editExpenseHandler = () => {
    fetch(
      `https://expense-tracker-acd04-default-rtdb.firebaseio.com/${email}/${id}.json`,
      {
        method: "DELETE",
      }
    );

    dispatch(expenseActions.removeExpense(id));

    document.getElementById("amount").value = amount;
    document.getElementById("description").value = description;
    document.getElementById("category").value = category;
  };

  return (
    <li className={classes.list} key={Math.random()}>
      <span className={classes.amount}>{amount}</span>
      <span className={classes.description}>{description}</span>
      <span className={classes.category}>{category}</span>
      <div className={classes.buttons}>
        <button onClick={editExpenseHandler}>Edit</button>
        <button onClick={deleteExpenseHandler}>Delete</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
