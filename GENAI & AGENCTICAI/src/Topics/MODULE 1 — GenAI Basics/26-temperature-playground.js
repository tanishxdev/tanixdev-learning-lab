import groq from "../../../src/utils/groqClient.js";

// Usage:
// node 26-temperature-playground.js "Explain closures"

const prompt = process.argv.slice(2).join(" ");

if (!prompt) {
  console.log("Provide a prompt");
  process.exit(1);
}

async function run() {
  const temps = [0.1, 0.5, 0.9];

  for (const t of temps) {
    const res = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: t,
      messages: [{ role: "user", content: prompt }],
    });

    console.log(`\n--- Temperature ${t} ---`);
    console.log(res.choices[0].message.content);
  }
}

await run();
