import groq from "../../../src/utils/groqClient.js";

async function run() {
  const weakPrompt = "Recursion";
  const strongPrompt = "Explain recursion in one sentence for a beginner.";

  const weakRes = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: weakPrompt }],
  });

  const strongRes = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: strongPrompt }],
  });

  console.log("Weak prompt output:");
  console.log(weakRes.choices[0].message.content);

  console.log("\nStrong instruction output:");
  console.log(strongRes.choices[0].message.content);
}

await run();
