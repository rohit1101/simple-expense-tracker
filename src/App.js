import { useState } from "react";
import { Input } from "./components/Input/Input";
import "./index.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [netValue, setNetValue] = useState({
    amount: 0,
    income: 0,
    expense: 0,
  });
  const [tracker, setTracker] = useState([]);

  const handleOnChange = (e) => {
    setValue(e.target.value.trim());
  };

  const handleIncome = (e) => {
    setNetValue({
      ...netValue,
      income: parseInt(netValue.income) + parseInt(value),
    });
    setTracker([
      ...tracker,
      {
        expense: 0,
        income: value,
        type: "Income",
        time: new Date().toString(),
      },
    ]);
    setValue(0);
  };
  const handleExpense = (e) => {
    setNetValue({
      ...netValue,
      expense: parseInt(netValue.expense) + parseInt(value),
    });
    setTracker([
      ...tracker,
      {
        income: 0,
        expense: value,
        type: "Expense",
        time: new Date().toString(),
      },
    ]);
    setValue(0);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        Balance: {netValue.income - netValue.expense}
      </h1>
      <Input
        value={value}
        onChange={handleOnChange}
        handleExpense={handleExpense}
        handleIncome={handleIncome}
      />
      {tracker.length !== 0 && (
        <div
          style={{
            padding: "8px",
            border: "1px solid",
            width: "80%",
            margin: "0 auto",
          }}
        >
          <h1>Transactions: </h1>
          {tracker.map((item, idx) => (
            <div key={idx} style={{ padding: "8px" }}>
              {item.time} - {item.income ? item.income : item.expense} -{" "}
              {item.type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
