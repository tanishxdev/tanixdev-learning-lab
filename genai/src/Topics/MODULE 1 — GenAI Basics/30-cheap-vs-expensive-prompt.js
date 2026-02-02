import groq from "../../../src/utils/groqClient.js";

async function run() {
  const shortPrompt = "Summarize recursion.";
  const longPrompt =
    "Please provide a very detailed, beginner-friendly, step-by-step explanation of recursion with multiple examples and edge cases.";

  const shortRes = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: shortPrompt }],
  });

  const longRes = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: longPrompt }],
  });

  console.log("Short output:\n", shortRes.choices[0].message.content);
  console.log("\nLong output:\n", longRes.choices[0].message.content);
}

await run();
