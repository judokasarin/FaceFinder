import React from 'react';
import styles from './Imgaebox.module.css'

const Imagebox =({ImageUrl, box}) =>{ 
    const classes = styles;
    console.log(box)
    return(
        <div>
            <img id="inputimage" src={ImageUrl} alt='' className={classes.imgbox}/>
            <div className={classes.facebox} 
                style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
            >   
            </div>
        </div>
    )
};

export default Imagebox;