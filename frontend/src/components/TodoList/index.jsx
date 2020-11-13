import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons';

import IconButton from '../IconButton'

import './styles.css';

const TodoList = props => {
    const list = props.list || []

    return (
        <table className="table table-hover table-striped table-borderless my-4">
            <tbody>
                {
                    list.map((item) => (
                        <tr className="row border mx-0" key={item._id} >
                            <th className="d-flex align-items-center col-sm-6 col-12 px-4" scope="row">
                                <span className={ item.done ? 'markedAsDone' : '' } >{item.description}</span>
                            </th>
                            <td className="col-sm-6 col-12 text-sm-right text-left px-4">
                                <IconButton color="success mr-2" handleClick={() => props.handleMarkAsDone(item) } hide={item.done} >
                                    <FontAwesomeIcon icon={faCheck} className="text-light" />
                                </IconButton>
                                
                                <IconButton color="warning mr-2" handleClick={() => props.handleMarkAsPending(item) } hide={!item.done} >
                                    <FontAwesomeIcon icon={faUndo} className="text-light" />
                                </IconButton>

                                <IconButton color="danger" handleClick={() => props.handleRemove(item) } >
                                    <FontAwesomeIcon icon={faTrash} className="text-light" />
                                </IconButton>
                            </td>
                        </tr> 
                    ))
                }
            </tbody>
        </table>
    )
}

export default TodoList;
