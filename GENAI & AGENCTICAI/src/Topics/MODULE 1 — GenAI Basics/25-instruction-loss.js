import groq from "../../../src/utils/groqClient.js";

async function run() {
  const longContext = "rules ".repeat(8000);

  const res = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "system", content: "Always answer in ONE word." },
      { role: "user", content: longContext },
      { role: "user", content: "What is recursion?" },
    ],
  });

  console.log(res.choices[0].message.content);
}

await run();
