import React from 'react';
import styles from './Rank.module.css'

const Rank =() =>{ 
    const classes = styles;
    return(
        <div className={classes.conatiner}>
           {`Arunesh Current Rank is #1`}
        </div>
    )
};

export default Rank;