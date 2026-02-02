import validateJSON from "./jsonValidator.js";

export default function analyzeOutput(output, input) {
  if (input.mode === "json") {
    return {
      validJSON: validateJSON(output),
    };
  }

  return { valid: true };
}
