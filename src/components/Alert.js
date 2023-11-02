import React from "react";
import "./Alert.css";
const Alert = ({ type, text }) => {
  return <div className={`aler alert-${type}`}>{text}</div>;
};

export default Alert;
