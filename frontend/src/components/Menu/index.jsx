import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

const Menu = () => {
    return (        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
                    Todo App
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link mt-1" to='/'>Tarefas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mt-1" to='/about'>Sobre</Link>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    );
}

export default Menu;
