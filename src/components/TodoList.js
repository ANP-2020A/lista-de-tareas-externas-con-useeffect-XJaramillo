import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import {renderIntoDocument} from "react-dom/test-utils";
import UserList from "./UserList";
import TodoList from "./TodoList";

const App = (props) => {

    return (
        <div>
            <UserList users={ props.users } />

            <TodoList/>
        </div>
    );
};
export default App;