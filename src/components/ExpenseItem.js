import React from "react";
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseItem = ({ expens, handleDelete, handleEdit }) => {
  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{expens.charge}</span>
        <span className='amount'>{expens.amount}원</span>
      </div>
      <div>
        <button className='edit-btn' onClick={() => handleEdit(expens.id)}>
          <MdEdit />
        </button>

        <button className='clear-btn' onClick={() => handleDelete(expens.id)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
