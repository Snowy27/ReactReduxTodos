import React from 'react';
import Title from './title';
import TodoList from '../containers/todoList';
import AddTodo from '../containers/addTodo';

const App = () => (
    <div>
        <Title />
        <section className="main">
            <AddTodo />
            <TodoList />
        </section>
    </div>
);

export default App;
