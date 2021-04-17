import React from 'react';
import styles from './Navbar.module.css'

const Navbar =() =>{ 
    const classes = styles;
    return(
        <div>
            <p className={classes.signin}>LogIn </p>
        </div>
    )
};

export default Navbar;