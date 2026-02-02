/**
 * Pure safety rewrite.
 * NO async.
 * NO LLM.
 * NO imports.
 */
export default function rewritePrompt(prompt) {
  if (!prompt || typeof prompt !== "string") {
    throw new Error("rewritePrompt: invalid prompt");
  }

  const bannedWords = ["hack", "kill", "bomb"];

  for (const word of bannedWords) {
    if (prompt.toLowerCase().includes(word)) {
      return "Explain the risks and ethical concerns of this topic.";
    }
  }

  return prompt;
}
