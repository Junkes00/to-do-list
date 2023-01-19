import React from "react";
import Button from "../Button";
import "./Styles.css";

const AddTask = ({ handleAddNewTask }) => {
  return (
    <div className="add-task-container">
      <input className="add-task-input" type="text" />
      <div className="add-task-button-container">
        <Button>Add new task</Button>
      </div>
    </div>
  );
};

export default AddTask;
