import groq from "../../../src/utils/groqClient.js";

// Usage:
// node 22-shorten-prompt.js "Explain JavaScript closures with examples"

const userPrompt = process.argv.slice(2).join(" ");

if (!userPrompt) {
  console.log("Please provide a prompt to shorten.");
  process.exit(1);
}

async function main() {
  const instruction = `
Rewrite the following text to be shorter and more concise.
Do NOT change the meaning.
Do NOT add new information.
Return only the rewritten text.
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "system", content: instruction },
      { role: "user", content: userPrompt },
    ],
  });

  console.log("\nOriginal Prompt:");
  console.log(userPrompt);

  console.log("\nShortened Prompt:");
  console.log(response.choices[0].message.content);
}

await main();
