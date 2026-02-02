// src/Topics/MODULE 1 — GenAI Basics/21-llm-basic.js
import groq from "../../../src/utils/groqClient.js";

async function run() {
  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "user",
        content: "LLM ? full form in ai world",
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

await run();
