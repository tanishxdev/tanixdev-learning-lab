import groq from "../../../src/utils/groqClient.js";

async function run() {
  const repeatedText = "recursion ".repeat(500);

  const res = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: repeatedText }],
  });

  console.log(res.choices[0].message.content);
}

await run();
