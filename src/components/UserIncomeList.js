import React, { useContext } from "react";
import { GlobalContext } from "../helper/AppGlobalState";
import IncomeTransaction from "./IncomeTransaction";

const UserIncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  console.log(incomeTransactions);

  return (
    <div className="transactions transactions-income">
      <ul className="transaction-list">
        {incomeTransactions.map(incomeTransaction => (
          <IncomeTransaction
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserIncomeList;
