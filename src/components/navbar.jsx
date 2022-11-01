import React from 'react';

function Navbar(props) {
    console.log('this.props', props);
    const url = "";
    return (  
        <nav className='navbar navbar-light bg-light'>
            <div className='container-fluid'>
                <a href={url} className='navbar-brand'>
                    Total items: {props.totalCounters }
                </a>

            </div>
        </nav>
    );
}

export default Navbar;