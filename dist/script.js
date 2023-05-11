const { useState } = React;

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const handleClick = index => {
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
    [2, 4, 6]];


    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
      board[a] === currentPlayer &&
      board[b] === currentPlayer &&
      board[c] === currentPlayer)
      {
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

  return /*#__PURE__*/(
    React.createElement("div", { className: "tictactoe" }, /*#__PURE__*/
    React.createElement("div", { id: "challenge_paragraph" }, /*#__PURE__*/
    React.createElement("p", null, "Challenge: Create a tic-tac-toe game that always starts with Player X and then Player O.", /*#__PURE__*/


    React.createElement("br", null), "By clicking a square, whoever is currently going (X or O) will fill that square.", /*#__PURE__*/


    React.createElement("br", null), "When all nine squares are filled or there is a winner with three in a row, show a Reset button that resets the game. ", /*#__PURE__*/

    React.createElement("br", null), "If someone wins, show a message saying who won.")), /*#__PURE__*/



    React.createElement("header", null, /*#__PURE__*/
    React.createElement("b", null, "Tic-Tact-Toe Game")), /*#__PURE__*/

    React.createElement("div", { className: "players" }, /*#__PURE__*/
    React.createElement("label", null, "Player One/X: "), /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      placeholder: "Enter Your Name",
      value: playerOne,
      onChange: e => setPlayerOne(e.target.value) }), /*#__PURE__*/

    React.createElement("br", null), /*#__PURE__*/
    React.createElement("label", null, "Player Two/O: "), /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      placeholder: "Enter you Name",
      value: playerTwo,
      onChange: e => setPlayerTwo(e.target.value) })),


    playerOne && playerTwo && /*#__PURE__*/
    React.createElement("div", { className: "board" },
    board.map((cell, index) => /*#__PURE__*/
    React.createElement("div", {
      key: index,
      className: "cell",
      onClick: () => handleClick(index) },

    cell))),




    winner && /*#__PURE__*/
    React.createElement("div", { className: "message" },
    winner === "draw" ?
    "It's a draw!" :
    `Player ${winner === "X" ? playerOne : playerTwo} wins!`),


    winner && /*#__PURE__*/
    React.createElement("button", { className: "reset-button", onClick: resetGame }, "Reset")));





};

ReactDOM.render( /*#__PURE__*/React.createElement(TicTacToe, null), document.getElementById("root"));