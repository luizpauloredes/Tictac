import React, { useState } from 'react';
import Square from './Square';


const Board = () => {

    const [positions, setPositions] = useState(['','','','','','','','','',])

    const [currentPlayer, setCurrentPlayer] = useState('B')
    const player1 = '5'
    const player2 = 'X'
    
    
    const changeValue =  (positions)=> {
      console.log('funcao changevalue ativada')
      setPositions(player1)
      
    }

    
   /*  const generateSquare = () => {
        let arr = []
        for ( let i= 0 ; i < 9; i++) {
            
                arr.push(<Square  val={positions[i]}  changeValue={changeValue} /> ) 
        }
    } */

    console.log('positions', positions)
    

    return (
        <div className="container p-3 bg-dark m-5 " >
            <div className="row ">
                {
                    positions && positions.map(
                        (item, index) =>{
                            return(<Square key={index} index={index}  positions={positions} val={item}  changeValue={changeValue} /> )
                        }                        
                    )
                }
            </div>
        </div>
    )
}

export default Board

