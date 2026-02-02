import groq from "../../../src/utils/groqClient.js";

async function run() {
  await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: "My name is Tanish" }],
  });

  const res = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: "What is my name?" }],
  });

  console.log(res.choices[0].message.content);
}

await run();
