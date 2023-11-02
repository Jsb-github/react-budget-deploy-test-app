import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <ul className='list'>
        {/* Expense Item */}
        {expenses.map((expens) => {
          return <ExpenseItem expens={expens} key={expens.id} handleDelete={handleDelete} handleEdit={handleEdit} />;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className='btn' onClick={clearItems}>
          목록 지우기
          <MdDelete className='btn-icon' />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
