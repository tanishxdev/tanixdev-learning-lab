import groq from "../../../src/utils/groqClient.js";

async function run() {
  const res = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "system",
        content: "You are a strict tutor. Answer in one sentence only.",
      },
      {
        role: "user",
        content: "Explain recursion in detail with examples.",
      },
    ],
  });

  console.log(res.choices[0].message.content);
}

await run();
