import React from 'react';
import styles from './Imgaelinkform.module.css'
import cx from 'classnames';

const Imagelinkform =({onInputChange, onButtonSubmit}) =>{ 
    const classes = styles;
    return(
        <div>
            <p className={cx(classes.headtext,classes.center)}>This magic brain will scan an image and find your face.</p>
            <div className={classes.form}>
                <input type="text" onChange={onInputChange} onSubmit={onButtonSubmit}/>
                <button onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    )
};

export default Imagelinkform;