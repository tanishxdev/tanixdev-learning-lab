import groq from "../../../src/utils/groqClient.js";

// Usage:
// node 23-prompt-cycle.js "Explain closures"

const prompt = process.argv.slice(2).join(" ");

if (!prompt) {
  console.log("Provide a prompt");
  process.exit(1);
}

async function run() {
  console.log("\n--- RAW PROMPT ---");
  console.log(prompt);

  console.log("\n--- SENDING TO MODEL ---");

  const res = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
  });

  console.log("\n--- MODEL OUTPUT ---");
  console.log(res.choices[0].message.content);

  console.log("\n--- END OF CYCLE ---");
}

await run();
