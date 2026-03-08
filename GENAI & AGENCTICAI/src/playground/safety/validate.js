export default function validatePrompt(input) {
  if (!input.prompt || !input.mode) {
    throw new Error("Invalid input");
  }
}
