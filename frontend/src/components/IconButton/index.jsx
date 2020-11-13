import React from 'react'

const IconButton = props => {

    if (props.hide) {
        return null;
    } 

    return (
        <button className={`btn btn-${props.color}`} onClick={props.handleClick} >
            {props.children}
        </button>
    );
}

export default IconButton
