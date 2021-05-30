import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameHandler = (event) =>{
      setEnteredUsername(event.target.value);
  }

  const ageHandler = (event) =>{
      setEnteredAge(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card onSubmit={addUserHandler} className={styles.input}>
      <label htmlFor="username">Username</label>
      <input id="username" value={enteredUsername} type="text" onChange={usernameHandler} />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" value={enteredAge} onChange={ageHandler} />
      <Button type="submit">Add User</Button>
    </Card>
  );
};

export default AddUser;
