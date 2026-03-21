import { useState } from "react";
import "./GuessNumber.css";

function GuessNumber() {
  // Step 1: generate random number between 1–10
  const generateNumber = () => Math.floor(Math.random() * 10) + 1;

  // Step 2: states
  const [secretNumber, setSecretNumber] = useState(generateNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Start guessing...");
  const [attempts, setAttempts] = useState(5);
  const [gameOver, setGameOver] = useState(false);

  // Step 4: handle guess
  const handleGuess = () => {
    if (gameOver) return;

    const num = Number(guess);

    // validation
    if (!num || num < 1 || num > 10) {
      setMessage("Enter a number between 1 and 10");
      return;
    }

    // correct guess
    if (num === secretNumber) {
      setMessage("Correct! You won!");
      setGameOver(true);
      return;
    }

    // decrease attempts
    setAttempts(attempts - 1);

    // too high / low
    if (num > secretNumber) {
      setMessage("Too High!");
    } else {
      setMessage("Too Low!");
    }

    // check game over
    if (attempts - 1 === 0) {
      setMessage(`Game Over! Number was ${secretNumber}`);
      setGameOver(true);
    }
  };

  // Step 6: reset game
  const resetGame = () => {
    setSecretNumber(generateNumber());
    setGuess("");
    setMessage("Start guessing...");
    setAttempts(5);
    setGameOver(false);
  };

  return (
    <div className="container">
      <h2>Guess The Number (1–10)</h2>

      {/* input */}
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={gameOver}
      />

      <button onClick={handleGuess} disabled={gameOver}>
        Guess
      </button>

      {/* feedback */}
      <p>{message}</p>
      <p>Attempts left: {attempts}</p>

      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default GuessNumber;
