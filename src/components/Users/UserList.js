import React from 'react'
import styles from './UserList.module.css';

const UserList = (props) => {
    return (
        <div className={styles.users}>
            <ul>
                {props.users.map((user) => {
                   return <li>{user.username} ({user.age} years)</li>
                })}
            </ul>
        </div>
    )
}

export default UserList;
