import Pop from './Pop';
import React, { useState, useEffect } from 'react';
import { calculateWinner, optimalMove } from './util';

function Board(){
    const rowCount = 4;
    const colCount = 5;
    const [selectedRow, setSelectedRow] = useState(-1);
    const [selectedColumns,setSelectedColumns] = useState([]);
    const [winner,setWinner] = useState(0);
    const [gameState, setGameState] = useState({
        userIsNext: true,
        gameArray: Array.from(Array(rowCount), () => new Array(colCount).fill(0)),
    });

    useEffect(() =>{
        if(!gameState.userIsNext) {
            makeOpponentMove()
        }
    }, [gameState.userIsNext]);

    const updateBoard = ({selectedRow, selectedColumns}) => {
        const oldGameState = {...gameState};
        const updatedGameArray = oldGameState.gameArray.slice()
        for (let i = 0; i < selectedColumns.length; i++){
            updatedGameArray[selectedRow][selectedColumns[i]] = 1
        }
        const updatedUserIsNext = !oldGameState.userIsNext
        setGameState({userIsNext: updatedUserIsNext, gameArray: updatedGameArray});
        setWinner(calculateWinner(updatedGameArray,updatedUserIsNext))
        setSelectedRow(-1);
        setSelectedColumns([]);
    };

    const makeOpponentMove = () => {
        const optMove = optimalMove(gameState.gameArray)
        console.log(optMove)
        if (optMove !== undefined){
            const selectedRow = optMove[0]
            const popsOptMove = optMove[1]
            let indicesOfActivePops = gameState.gameArray[selectedRow].map((x,idx) => x == 1 ? -1 : idx).filter(x => x >= 0)
            const selectedColumns = indicesOfActivePops.slice(0,popsOptMove)
            // timeout to simulate the opponent thinking
            setTimeout(() => {
                updateBoard({selectedRow,selectedColumns})
            },1500);
        }
    }

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
        <div className = "boardContainer">
            <div><h2>{winner == 0 ? gameState.userIsNext ? 'Your Turn!': 'Opponents Turn!' : winner == 1 ? 'You won!' : 'You lost'}</h2></div>
            <div className = "Board">
                {[...new Array(rowCount)].map((x, rowindex) => {
                    return (
                    <div className ="boardRow" rowindex = {rowindex}>
                    {[...new Array(colCount)].map((y, columnindex) => {
                        return <Pop rowindex = {rowindex} columnindex = {columnindex} popped = {gameState.gameArray[rowindex][columnindex] == 1} 
                        selected = {checkIfSelected(rowindex,columnindex)} 
                        callBack = {gameState.userIsNext && winner == 0 ? (args) => clickPops(args) : () => {}} />
                    })}
                    </div>
                    )
                })
                }
                <button className = 'popButton' onClick = {gameState.userIsNext && winner == 0 ? () => updateBoard({selectedRow,selectedColumns}) : () => {}}> Pop it! </button>
            </div>
        </div>
    )
} 

export default Board