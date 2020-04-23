import React, { useContext } from "react";
import { GlobalContext } from "../helper/AppGlobalState";

const UserBalance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)

    

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    

  return (
    <div className="balance">
      <h2>Expenses Calculation</h2>
      <p>Balance</p>
      <h3 className="balance-header">{(totalIncome - totalExpenses).toLocaleString("cs-CZ")} CZK</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income: </h3>
          <p>{totalIncome.toLocaleString("cs-CZ")} Kc</p>
        </div>
        <div className="minus">
          <h3>Spendings:</h3>
          <p>{totalExpenses.toLocaleString("cs-CZ")} Kc</p>
        </div>
      </div>
    </div>
  );
};

export default UserBalance;
