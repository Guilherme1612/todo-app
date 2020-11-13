import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import IconButton from '../IconButton';

import './styles.css';

const TodoForm = props => {

    function keyHandler(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }
        else if (e.key == 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='row todoForm'>
            <div className='col-lg-9 mt-4'>
                <input 
                    id='description' 
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                />
            </div>

            <div className='col-lg-3 mt-sm-4 mt-3 d-flex justify-content-between'>
                <IconButton color="info mr-2 button" handleClick={props.handleAdd} >
                    <FontAwesomeIcon icon={faPlus} className="text-light" />
                </IconButton>

                <IconButton color="primary mr-2 button" handleClick={props.handleSearch} >
                    <FontAwesomeIcon icon={faSearch} className="text-light" />
                </IconButton>

                <IconButton color="dark button" handleClick={props.handleClear} >
                    <FontAwesomeIcon icon={faTimes} className="text-light" />
                </IconButton>
            </div>
        </div>
    )
}

export default TodoForm
