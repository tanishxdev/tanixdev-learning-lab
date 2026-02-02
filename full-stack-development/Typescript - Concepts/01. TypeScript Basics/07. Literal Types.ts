export {};

// String Literal Types
type Direction = "Up" | "Down" | "Left" | "Right";

let move: Direction;
move = "Up";        // ✅ Allowed
// move = "Forward"; // ❌ Error
console.log(move)

// Numeric Literal Types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
  return 4;   // ✅ Valid
  // return 7; // ❌ Error
}
console.log(rollDice());

// Boolean Literal Types
type Success = true;

function operation(): Success {
  return true;   // ✅
  // return false; // ❌ Error
}

console.log(operation());
