import groq from "../../../src/utils/groqClient.js";

async function run() {
  const shortPrompt = "Explain recursion";
  const longPrompt =
    "Please explain the concept of recursion in computer science in a very simple and beginner friendly manner with examples.";

  const shortRes = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: shortPrompt }],
  });

  const longRes = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: longPrompt }],
  });

  console.log("Short prompt response:\n", shortRes.choices[0].message.content);
  console.log("\nLong prompt response:\n", longRes.choices[0].message.content);
}

await run();
