import React from 'react'

const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" />
            <label htmlFor="Age">Age (Years)</label>
            <input type="number" />
            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser
