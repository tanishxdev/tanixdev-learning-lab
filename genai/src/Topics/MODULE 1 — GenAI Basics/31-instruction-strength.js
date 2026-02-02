import groq from "../../../src/utils/groqClient.js";

const prompts = [
  "Binary search",
  "Explain binary search",
  "Explain binary search in one sentence",
  "Explain binary search in one sentence using simple words",
];

async function run() {
  for (const prompt of prompts) {
    const res = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0.3,
      messages: [{ role: "user", content: prompt }],
    });

    console.log("\nPrompt:", prompt);
    console.log(res.choices[0].message.content);
    console.log("----");
  }
}

await run();
