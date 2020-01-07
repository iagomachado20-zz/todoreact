import React from 'react';

import AddTodoComponent from '../../components/InputAddTodoComponent';
import ListTodoComponent from '../../components/ListTodoComponent';
import styled from "styled-components";

const CardTodo = styled.section`
    background: #f3f3f3;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.027);
    padding: 30px;
    box-sizing: border-box;
    margin-top: 50px;
    border-radius: 10px;
`;

const Main = () => (
    <CardTodo>
        <AddTodoComponent></AddTodoComponent>
        <ListTodoComponent></ListTodoComponent>
    </CardTodo>
);

export default Main;