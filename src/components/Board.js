import React, { useState } from 'react';
import Square from './Square';


const Board = () => {

    const [val, setVal] = useState({
        1: 'teste',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
    })

    const [currentPlayer, setCurrentPlayer] = useState(false)


    const player1 = 'O'
    const player2 = 'X'
    const square = () => {
        let arr = []

        for (let i = 1; i < 10; i++) {
            arr = [...arr, <div className="col-4">
                <Square val={val['i']} changeValue={() => {

                    setVal({ ...val, i: currentPlayer ? player1 : player2 })
                    setCurrentPlayer(!currentPlayer)
                }
                } />
            </div>]

        }
        return arr
    }


    console.log(square())
    console.log('val', val['1'])
    return (
        <div className="container p-3 bg-dark m-5 " >
            <div className="row ">
            {square().map(e=> e)}
                
            </div>
        </div>
    )
}

export default Board

