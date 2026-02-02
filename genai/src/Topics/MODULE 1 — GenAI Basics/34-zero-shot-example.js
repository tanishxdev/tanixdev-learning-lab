import groq from "../../../src/utils/groqClient.js";

async function run() {
  const res = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "user",
        content: "Summarize binary search in one sentence.",
      },
    ],
  });

  console.log(res.choices[0].message.content);
}

await run();
