export default function GameOver({ winner, restartGame }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{winner ? `Congratulations ${winner}, you won!` : "It's a draw!"}</p>
      <p>
        <button onClick={restartGame}>Play Again</button>
      </p>
    </div>
  );
}
