import React, { useContext } from "react";
import { GlobalContext } from "../helper/AppGlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">
        {incomeTransaction.incomeAmount.toLocaleString("cs-CZ")} Kc
      </span>
      <button
        onClick={() => deleteTransaction(incomeTransaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default IncomeTransaction;
