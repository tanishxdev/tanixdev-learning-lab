import groq from "../../../src/utils/groqClient.js";

async function run() {
  const weak = "Classify this review: The product is great.";
  const strong =
    "Classify the following review as POSITIVE or NEGATIVE. Return only the label.\nReview: The product is great.";

  const weakRes = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: weak }],
  });

  const strongRes = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: strong }],
  });

  console.log("Weak:", weakRes.choices[0].message.content);
  console.log("Strong:", strongRes.choices[0].message.content);
}

await run();
