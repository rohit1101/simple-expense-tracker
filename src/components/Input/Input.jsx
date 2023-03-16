import React from "react";

export const Input = ({ value, onChange, handleIncome, handleExpense }) => {
  const wrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inpEl = {
    marginBottom: "8px",
  };

  return (
    <div style={wrapper}>
      <input style={inpEl} type="number" value={value} onChange={onChange} />

      <div style={{ marginTop: "16" }}>
        <button onClick={handleIncome}>Income </button>
        <button onClick={handleExpense}>Expense </button>
      </div>
    </div>
  );
};
