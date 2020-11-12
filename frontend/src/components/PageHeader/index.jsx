import React from 'react';

const PageHeader = props => {
    return (
        <>
            <header className="d-flex align-items-center mt-5">
                <h2>{props.title}</h2>
            </header>
            <hr/>
        </>
    );
}

export default PageHeader;
