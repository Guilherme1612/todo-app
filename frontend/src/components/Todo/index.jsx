import React from 'react';
import axios from 'axios';

import  PageHeader from '../PageHeader';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

const Todo = () => {
    const [description, setDescription] = React.useState('');
    const [list, setList] = React.useState([]);

    const url = "http://localhost:3333/api/todos";

    function handleChange(element) {
        setDescription(element.target.value);
    }

    function handleAdd() {
        axios.post(url, { description });
    }

    function handleRemove(item) {
        axios.delete(`${url}/${item._id}`)
    }

    function handleMarkAsDone(item) {
        axios.put(`${url}/${item._id}`, { ...item, done: true })
    }

    function handleMarkAsPending(item) {
        axios.put(`${url}/${item._id}`, { ...item, done: false })
    }

    React.useEffect(() => {
        axios.get(`${url}?sort=-createdAt`)
            .then(res => setList(res.data));
    }, [handleAdd, handleRemove, handleMarkAsDone, handleMarkAsPending]);

    return (
        <div className="container">
            <PageHeader title="Tarefas" />
            <TodoForm 
                description={description}
                handleChange={handleChange}
                handleAdd={handleAdd}
            />
            <TodoList 
                list={list} 
                handleMarkAsDone={handleMarkAsDone}
                handleMarkAsPending={handleMarkAsPending}
                handleRemove={handleRemove} 
            />
        </div>
    );
}

export default Todo;