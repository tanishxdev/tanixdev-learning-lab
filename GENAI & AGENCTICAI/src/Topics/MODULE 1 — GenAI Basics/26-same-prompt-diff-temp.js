import groq from "../../../src/utils/groqClient.js";

async function run() {
  const prompt = "Explain recursion in one sentence";

  const temperatures = [0.0, 0.3, 0.7, 1.0];

  for (const temp of temperatures) {
    const res = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: temp,
      messages: [{ role: "user", content: prompt }],
    });

    console.log(`\nTemperature: ${temp}`);
    console.log(res.choices[0].message.content);
  }
}

await run();
