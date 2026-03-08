import groq from "../../../src/utils/groqClient.js";

async function run() {
  for (let i = 0; i < 3; i++) {
    const res = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: "Explain recursion in one sentence",
        },
      ],
    });

    console.log(`Run ${i + 1}:`, res.choices[0].message.content + "\n");
  }
}

await run();
