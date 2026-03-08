import groq from "../../../utils/groqClient.js";

async function run() {
  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "user",
        content: "Explain what an LLM is in one sentence",
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

await run();
