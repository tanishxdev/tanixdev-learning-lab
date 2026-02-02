export {};

// Numeric Enums
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up);
console.log(Direction.Down);

// String Enums
enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
console.log(Direction2.Down);

// Heterogeneous Enums
enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = "SERVER_ERROR"
}
console.log(Status.Success);
console.log(Status.NotFound);
console.log(Status.ServerError);