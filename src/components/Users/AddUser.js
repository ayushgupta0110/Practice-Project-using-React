import React from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';


const AddUser = () => {
    
    
    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Card onSubmit={addUserHandler} className={styles.input}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" />
            <Button type="submit">Add User</Button>
        </Card>
    )
}

export default AddUser
