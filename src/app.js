import React, {Component} from 'react';
import Title from './components/title.js';
import InputField from './components/inputField.js';
import List from './components/list.js';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            currentInput: ''
        };

        this.handleInputSubmit = this.handleInputSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDoneClick = this.handleDoneClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    render() {
        return (
            <div>
                <Title />
                <section className="main">
                    <InputField
                        onChange={this.handleInputChange}
                        onSubmit={this.handleInputSubmit}
                        currentInput={this.state.currentInput}/>
                    <List
                        onDoneClick={this.handleDoneClick}
                        onRemoveClick={this.handleRemoveClick}
                        todos={this.state.todos}/>
                </section>
            </div>
        );
    }

    handleInputSubmit(event) {
        const todos = this.state.todos.slice();
        todos.push({
            title: this.state.currentInput,
            done: false
        });
        this.setState({
            todos: todos,
            currentInput: ''
        });
        event.preventDefault();
    }

    handleInputChange(event) {
        this.setState({currentInput: event.target.value});
    }

    handleDoneClick(index) {
        const todos = this.state.todos.slice();
        todos[index].done = !todos[index].done;
        this.setState({
            todos: todos
        });
    }

    handleRemoveClick(index) {
        const todos = [...this.state.todos];
        todos.splice(index, 1);
        this.setState({
            todos: todos
        });
    }

}
