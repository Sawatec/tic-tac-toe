export default function Log({ gameTurns }) {

  return (
    <ol id="log">
        {gameTurns.map((turn, index) => {
            const { square, player } = turn;
            return (
            <li key={index}>
                <span>{`Player ${player} selected square (${square.row}, ${square.col})`}</span>
            </li>
            );
        })}
    </ol>
  );
}