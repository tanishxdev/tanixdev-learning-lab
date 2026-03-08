import groq from "../../../src/utils/groqClient.js";

async function run() {
  const prompt = "Explain the difference between BFS and DFS";

  const models = ["llama-3.1-8b-instant", "llama-3.3-70b-versatile"];

  for (const model of models) {
    console.time(model);

    const res = await groq.chat.completions.create({
      model,
      messages: [{ role: "user", content: prompt }],
    });

    console.timeEnd(model);
    console.log(res.choices[0].message.content);
    console.log("------");
  }
}

await run();
