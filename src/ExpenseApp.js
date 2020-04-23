import React from "react";

import UserBalance from "./components/UserBalance";
import UserIncomeList from "./components/UserIncomeList";
import UserExpenseList from "./components/UserExpenseList";
import UserAddTransaction from "./components/UserAddTransaction";
import { GlobalContextProvider } from "./helper/AppGlobalState";
import "./style.css";

const ExpenseApp = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <UserBalance />
          <UserIncomeList />
          <UserExpenseList />
          <UserAddTransaction />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default ExpenseApp;
