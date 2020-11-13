import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import IconButton from '../IconButton';

const TodoForm = props => {
    return (
        <div role='form' className='row todoForm'>
            <div className='col-md-10 col-sm-9 mt-4'>
                <input 
                    id='description' 
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onChange={props.handleChange}
                />
            </div>

            <div className='col-md-2 col-sm-3 mt-sm-4 mt-2'>
                <IconButton color="info w-100" handleClick={props.handleAdd} >
                    <FontAwesomeIcon icon={faPlus} className="text-light" />
                </IconButton>
            </div>
        </div>
    )
}

export default TodoForm
