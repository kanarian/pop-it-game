import './Pop.css';
import React, { useEffect, useState } from 'react';


function Pop({rowindex, columnindex, selected, popped, callBack}){
    return(
        <div className = "Pop" rowindex = {rowindex} columnindex = {columnindex} 
        popped = {popped.toString()} sel = {(selected && !popped).toString()} 
        onClick = {() => callBack({rowindex,columnindex})}>
            {popped.toString()}
        </div>
    )
}

export default Pop