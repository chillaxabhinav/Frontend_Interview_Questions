import { useState } from 'react';

const initialValue = (size) => Array(size*size).fill(null);

const useTicTacToe = (boardSize) => {
    
    const [board, setBoard] = useState(initialValue(boardSize));
    const [isXTurn, setIsXTurn] = useState(true);

    const [winner, setWinner] = useState({
        found: false,
        value: null,
    });
 
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const calculateWinner = (newBoard) => {
        for (let i = 0; i < winningPatterns.length; i++) {
            const currentPattern = winningPatterns[i];
            let countX = 0;
            let countO = 0;
            for (let j = 0; j < currentPattern.length; j++) {
                const currentVal = newBoard[currentPattern[j]];
                if (currentVal === 'X') countX++;
                if (currentVal === 'O') countO++;
            }
            if (countX === 3) return 'X';
            else if (countO === 3) return 'O';
        }
        if (!newBoard.some(ele => ele === null)) {
            return 'draw'
        }
        return null;
    };

    const handleClick = (index) => {
        const nextBoard = board.slice();
        nextBoard[index] = isXTurn ? 'X' : 'O';
        setBoard(nextBoard);
        const winner = calculateWinner(nextBoard);
        if (!winner) {
            setIsXTurn(!isXTurn);
        } else {
            setWinner((prev) => {
                return {
                    ...prev,
                    found: true,
                    value: winner
                }
            });
        }
    };

    const getStatusMessage = () => {
        if (winner.found) {
            if (winner.value === 'draw') {
                return 'Match Draw';
            }
            return `Winner is ${winner.value}`
        }
        return `Player ${isXTurn ? 'X' : 'O'} turn!`;
    };

    const resetGame = () => {
        setIsXTurn(true);
        setWinner({
            found: false,
            value: null,
        });
        setBoard(initialValue(boardSize));
    };

    return {
        board,
        handleClick,
        getStatusMessage,
        resetGame,
        winner,
    }
};

export default useTicTacToe;

