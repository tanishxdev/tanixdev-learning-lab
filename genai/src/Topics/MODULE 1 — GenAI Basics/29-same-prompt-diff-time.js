import groq from "../../../src/utils/groqClient.js";

async function run() {
  const prompt = "Return a JSON object with keys a and b only.";

  const res = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    temperature: 0,
    messages: [{ role: "user", content: prompt }],
  });

  console.log(res.choices[0].message.content);
}

await run();
