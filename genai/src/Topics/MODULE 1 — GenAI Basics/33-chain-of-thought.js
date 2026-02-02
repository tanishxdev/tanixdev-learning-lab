import groq from "../../../src/utils/groqClient.js";

async function run() {
  const res = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    temperature: 0,
    messages: [
      {
        role: "user",
        content: "What is 27 multiplied by 14?",
      },
    ],
  });

  console.log(res.choices[0].message.content);
}

await run();
