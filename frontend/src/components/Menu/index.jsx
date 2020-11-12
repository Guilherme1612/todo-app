import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'

const Menu = () => {
    return (        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
                    Todo App
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link mt-1" href='#/todos'>Tarefas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mt-1" href='#/about'>Sobre</a>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    )
}

export default Menu
