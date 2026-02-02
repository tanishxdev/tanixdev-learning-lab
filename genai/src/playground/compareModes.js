import { getModeHandler } from "./modes/index.js";
import rewritePrompt from "./safety/rewrite.js";
import executeLLM from "../utils/executeLLM.js";
import config from "../config/playground.config.js";

const MODES = ["normal", "instruction", "role", "json", "fewShot", "multiStep"];

export default async function compareModes(prompt, temperature) {
  const safePrompt = rewritePrompt(prompt);

  for (const mode of MODES) {
    const handler = getModeHandler(mode);
    const preparedPrompt = handler.prepare(safePrompt);

    const output = await executeLLM({
      prompt: preparedPrompt,
      temperature,
      model: config.defaultModel,
    });

    console.log("\n==============================");
    console.log(`MODE: ${mode}`);
    console.log("==============================");
    console.log(output);
  }
}
