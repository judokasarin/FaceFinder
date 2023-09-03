import React from 'react';
import styles from './Logo.module.css'
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';


const Logo =() =>{ 
    const classes = styles;
    return(
        <div className={classes.center}>
        <Tilt className={classes.logo} >
            <img src={brain} alt="logo" className={classes.brain}/>
        </Tilt >
        </div>
    )
};

export default Logo;