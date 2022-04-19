import Pop from './Pop';
import React, { useState } from 'react';


function Board(){
    const rowCount = 5;
    const colCount = 5;
    const [selectedRow, setSelectedRow] = useState(-1);
    const [selectedColumns,setSelectedColumns] = useState([]);
    const [gameState, setGameState] = useState({
        userIsNext: true,
        gameArray: Array.from(Array(rowCount), () => new Array(colCount).fill(0)),
    });
    const updateBoard = ({selectedRow, selectedColumns}) => {
        const oldGameState = {...gameState};
        const updatedGameArray = oldGameState.gameArray.slice()
        for (let i = 0; i < selectedColumns.length; i++){
            updatedGameArray[selectedRow][selectedColumns[i]] = 1
        }
        const updatedUserIsNext = !oldGameState.userIsNext
        setGameState({userIsNext: updatedUserIsNext, gameArray: updatedGameArray});
    };

    const clickPops = ({rowindex, columnindex}) =>{
        if(selectedRow == rowindex){
            if(selectedColumns.includes(columnindex)){
                setSelectedColumns(selectedColumns.filter(x => x != columnindex))
            }
            else{
                setSelectedColumns([...selectedColumns,columnindex])
            }
        }
        else{
            setSelectedRow(rowindex);
            setSelectedColumns([columnindex])
        }
    }

    const checkIfSelected = (rowindex,columnindex) => {
        return (rowindex == selectedRow) && (selectedColumns.includes(columnindex));
    }

    return(
        <div className = "Board">
            <div><h2>{gameState.userIsNext ? 'Your': 'Opponents'} Turn!</h2></div>
            {[...new Array(rowCount)].map((x, rowindex) => {
                return (
                <div className ="boardRow" rowindex = {rowindex}>
                {[...new Array(colCount)].map((y, columnindex) => {
                    return <Pop rowindex = {rowindex} columnindex = {columnindex} popped = {gameState.gameArray[rowindex][columnindex] == 1} 
                    selected = {checkIfSelected(rowindex,columnindex)} 
                    callBack = {gameState.userIsNext ? (args) => clickPops(args) : () => {}} />
                })}
                </div>
                )
            })
            }
            <button onClick = {gameState.userIsNext ? () => updateBoard({selectedRow,selectedColumns}) : () => {}}> Pop it! </button>
        </div>
    )
} 

export default Board