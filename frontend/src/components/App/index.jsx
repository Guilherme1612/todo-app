import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from '../Menu';
import Todo from '../Todo';
import About from '../About';

const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={"Página não encontrada"}  />
            </Routes>
        </BrowserRouter>
    );
}

export default App;