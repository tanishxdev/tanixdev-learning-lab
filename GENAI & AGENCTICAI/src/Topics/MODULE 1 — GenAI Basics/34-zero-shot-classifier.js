import groq from "../../../src/utils/groqClient.js";

// Simple zero-shot sentiment classifier

async function classify(text) {
  const res = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    temperature: 0,
    messages: [
      {
        role: "user",
        content:
          "Classify the following text as POSITIVE or NEGATIVE. Return only the label.\nText: " +
          text,
      },
    ],
  });

  return res.choices[0].message.content;
}

async function run() {
  const texts = ["I love this product", "This is the worst experience ever"];

  for (const t of texts) {
    console.log(t, "→", await classify(t));
  }
}

await run();
