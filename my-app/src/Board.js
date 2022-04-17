import Pop from './Pop';
import React, { useState } from 'react';

function Board(){
    const [selectedRow, setSelectedRow] = useState(-1);
    const [selectedColumns,setSelectedColumns] = useState([]);
    console.log(selectedRow)
    console.log(selectedColumns)
    const rowCount = 5;
    const colCount = 5;


    // const updateBoard = ({selectedRow, selectedColumns}) => {
//TODO:
    // }

    const clickPops = ({rowindex, columnindex}) =>{
        console.log(rowindex)
        console.log(columnindex)
        if(selectedRow == rowindex){
            setSelectedColumns([...selectedColumns,columnindex])
        }
        else{
            setSelectedRow(rowindex);
            setSelectedColumns([columnindex])
        }
    }

    return(
        <div className = "Board">
            {[...new Array(rowCount)].map((x, rowindex) => {
                return (
                <div className ="boardRow" rowindex = {rowindex}>
                {[...new Array(colCount)].map((y, columnindex) => {
                    return <Pop rowindex = {rowindex} columnindex = {columnindex} callBack = {(args) => clickPops(args)} />
                })}
                </div>
                )
            })
            }
            <button onClick=  {() => console.log("popping from row "+selectedRow+" columns "+selectedColumns)}> Pop it! </button>
        </div>
    )
} 

export default Board