import React from 'react';
import styles from './Navbar.module.css'

const Navbar =() =>{ 
    const classes = styles;
    return(
        <div>
            <p className={classes.signin}>LogIn </p>
            <h1>hey</h1>
        </div>
    )
};

export default Navbar;