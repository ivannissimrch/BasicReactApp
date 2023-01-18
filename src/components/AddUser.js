import React, { useState } from "react";
import Card from "./UI/Card";
import classes from "./AddUser.module.css";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();
  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setUserAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({ title: "error!", message: "Please enter valid value" });
      return;
    }
    if (+userAge < 1) {
      setError({ title: "error!", message: "Please enter valid age" });
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };
  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            onChange={userNameHandler}
            value={userName}
          ></input>
          <label htmlFor="userAge">User Name</label>
          <input
            type="number"
            id="userAge"
            onChange={ageHandler}
            value={userAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
