import groq from "../../../src/utils/groqClient.js";

async function run() {
  const prompt = "Explain recursion in one sentence";

  const models = ["llama-3.1-8b-instant", "llama-3.3-70b-versatile"];

  for (const model of models) {
    const res = await groq.chat.completions.create({
      model,
      messages: [{ role: "user", content: prompt }],
    });

    console.log(`\nModel: ${model}`);
    console.log(res.choices[0].message.content);
  }
}

await run();
