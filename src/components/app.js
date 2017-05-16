import React from 'react';
import Title from './title';
import TodoList from '../containers/todoList';
import AddTodo from '../containers/addTodo';
import Filters from '../containers/filters';

const App = () => (
    <div>
        <Title />
        <section className="main">
            <AddTodo />
            <TodoList />
        </section>
        <Filters />
    </div>
);

export default App;
