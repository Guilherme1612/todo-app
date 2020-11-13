import React from 'react';
import axios from 'axios';

import  PageHeader from '../PageHeader';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

const Todo = () => {
    const [description, setDescription] = React.useState('');
    const [list, setList] = React.useState([]);
    const [search, setSearch] = React.useState('');

    const url = "http://localhost:3333/api/todos";

    function handleChange(element) {
        setDescription(element.target.value);
    }

    function handleAdd() {
        axios.post(url, { description });
    }

    function handleSearch() {
        setSearch(`&description__regex=/${description}/`);
    }

    function handleClear() {
        setSearch('');
        setDescription('');
    }

    function handleMarkAsDone(item) {
        axios.put(`${url}/${item._id}`, { ...item, done: true })
    }

    function handleMarkAsPending(item) {
        axios.put(`${url}/${item._id}`, { ...item, done: false })
    }

    function handleRemove(item) {
        axios.delete(`${url}/${item._id}`)
    }

    React.useEffect(() => {
        axios.get(`${url}?sort=-createdAt${search}`)
            .then(res => setList(res.data));
    }, [handleAdd, handleSearch, handleClear, handleMarkAsDone, handleMarkAsPending, handleRemove]);

    return (
        <div className="container">
            <PageHeader title="Tarefas" />
            <TodoForm 
                description={description}
                handleChange={handleChange}
                handleAdd={handleAdd}
                handleSearch={handleSearch}
                handleClear={handleClear}
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