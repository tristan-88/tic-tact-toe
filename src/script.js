const { useState } = React;

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const handleClick = (index) => {
    if (board[index] === "" && winner === "") {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      checkWinner(newBoard, currentPlayer);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const checkWinner = (board, currentPlayer) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        board[a] === currentPlayer &&
        board[b] === currentPlayer &&
        board[c] === currentPlayer
      ) {
        setWinner(currentPlayer);
        // Change this from break to return to since break getting out of the loop earlier so it was not counting the if there is a winner with last turn
        return;
      }
    }

    if (!board.includes("")) {
      setWinner("draw");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner("");
    setPlayerOne("");
    setPlayerTwo("");
  };

  return (
    <div className="tictactoe">
      <div id="challenge_paragraph">
        <p>
          Challenge: Create a tic-tac-toe game that always starts with Player X
          and then Player O.
          <br />
          By clicking a square, whoever is currently going (X or O) will fill
          that square.
          <br />
          When all nine squares are filled or there is a winner with three in a
          row, show a Reset button that resets the game. <br />
          If someone wins, show a message saying who won.
        </p>
      </div>
      <header>
        <b>Tic-Tact-Toe Game</b>
      </header>
      <div className="players">
        <label>Player One/X: </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={playerOne}
          onChange={(e) => setPlayerOne(e.target.value)}
        />
        <br />
        <label>Player Two/O: </label>
        <input
          type="text"
          placeholder="Enter you Name"
          value={playerTwo}
          onChange={(e) => setPlayerTwo(e.target.value)}
        />
      </div>
      {playerOne && playerTwo && (
        <div className="board">
          {board.map((cell, index) => (
            <div
              key={index}
              className="cell"
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
      )}
      {winner && (
        <div className="message">
          {winner === "draw"
            ? "It's a draw!"
            : `Player ${winner === "X" ? playerOne : playerTwo} wins!`}
        </div>
      )}
      {winner && (
        <button className="reset-button" onClick={resetGame}>
          Reset
        </button>
      )}
    </div>
  );
};

ReactDOM.render(<TicTacToe />, document.getElementById("root"));
