import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const userInputRef = useRef();
  const ageInputRef = useRef();
  const [error,setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = userInputRef.current.value;
    const enteredAge = userInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)."
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)."
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    
    //Not a good practice to update the refs as they can be hacky sometimes
    userInputRef.current.value='';
    ageInputRef.current.value='';
  };

  const errorHandler = (err) => {
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          ref={userInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          ref={ageInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
