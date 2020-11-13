import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons';

import IconButton from '../IconButton'

const TodoList = props => {
    const list = props.list || []

    return (
        <table className="table table-hover table-striped table-borderless my-4">
            <tbody>
                {
                    list.map((item) => (
                        <tr className="row" key={item._id} >
                            <th className="d-flex align-items-center col-sm-6 col-12 text-sm-left text-center px-4" scope="row">
                                <span>{item.description}</span>
                            </th>
                            <td className="col-sm-6 col-12 text-sm-right text-center px-4">
                                <IconButton color="success mr-2" handleClick={() => props.handleMarkAsDone(item) } >
                                    <FontAwesomeIcon icon={faCheck} className="text-light" />
                                </IconButton>
                                
                                <IconButton color="warning mr-2" handleClick={() => props.handleMarkAsPending(item) } >
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
