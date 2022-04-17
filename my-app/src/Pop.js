import './Pop.css';
import React, { useState } from 'react';


function Pop({rowindex, columnindex, callBack}){
    // const [clickable,setClickable] = useState(false);
    // const [popped,setPopped] = useState(true);
    const [selected, setSelected] = useState(false)

    // console.log("row index is "+rowindex+"col index is "+columnindex+" selected?: "+selected)

    return(
        <div className = "Pop" rowindex = {rowindex} columnindex = {columnindex} onClick = {() => callBack({rowindex,columnindex})}>
            {/* row = {rowindex} col = {columnindex} */}
            hi
        </div>
    )
}

export default Pop