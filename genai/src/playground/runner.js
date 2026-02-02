import config from "../config/playground.config.js";
import executeLLM from "../utils/executeLLM.js";
import analyzeOutput from "./analysis/outputAnalyzer.js";
import getCliInput from "./cli.js";
import { getModeHandler } from "./modes/index.js";
import rewritePrompt from "./safety/rewrite.js";
import compareModes from "./compareModes.js";

export default async function runPlayground() {
  // 1. Read CLI input FIRST
  const input = getCliInput();

  // 2. Side-by-side comparison path
  if (input.compare) {
    await compareModes(input.prompt, input.temperature);
    return;
  }

  // 3. Safety rewrite
  const safePrompt = rewritePrompt(input.prompt);

  // 4. Mode selection
  const modeHandler = getModeHandler(input.mode);

  // 5. Prompt preparation
  const preparedPrompt = modeHandler.prepare(safePrompt);

  // 6. LLM execution
  const rawOutput = await executeLLM({
    prompt: preparedPrompt,
    temperature: input.temperature,
    model: config.defaultModel,
  });

  // 7. Analysis
  const analysis = analyzeOutput(rawOutput, input);

  // 8. Output
  console.log("\nANALYSIS:", analysis);
  console.log("\nFINAL OUTPUT:\n", rawOutput);
}
