import useTicTacToe from '../hooks/useTicTacToe';

const TicTacToe = () => {

    const { board, handleClick, getStatusMessage, resetGame, winner } = useTicTacToe(3);

    return (
        <div className='game'>
            <div className='status'>
                <span>{getStatusMessage()}</span>
                <button onClick={() => resetGame()}>Reset Game</button>
            </div>
            <div className='board'>
                {board.map((val, index) => {
                    return (
                        <button
                            className='cell'
                            key={index}
                            onClick={() => handleClick(index)}
                            disabled={val !== null || winner.found}
                        >
                            {val === null ? '' : val}
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

export default TicTacToe;
