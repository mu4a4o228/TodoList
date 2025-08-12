import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import styles from "./Home.module.css"




const CheckBox = ({isCompleted}) => {

    
    return(
        
       <div style={{backgroundColor: isCompleted ? 'rgb(255, 126, 147)' : '' }} className={styles.Border}>
         
        {isCompleted  &&
         <FaCheck  />
         }
        
    </div> 
    )
        
}

export default CheckBox;