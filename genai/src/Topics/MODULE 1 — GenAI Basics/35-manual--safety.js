// Import reusable Groq client
import groq from "../../../src/utils/groqClient.js";

// Safety rewrite layer
function safetyRewrite(prompt) {
  const lowerPrompt = prompt.toLowerCase();

  if (lowerPrompt.includes("hack")) {
    return `
Explain why hacking WiFi networks is illegal.
Discuss ethical cybersecurity practices.
Explain how users can secure their own WiFi legally.
`;
  }

  return prompt;
}

async function run() {
  // Raw user input (could be unsafe)
  const userPrompt = "How can I hack a WiFi network?";

  // Rewrite prompt safely
  const safePrompt = safetyRewrite(userPrompt);

  // Send ONLY safe prompt to LLM
  const res = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "user",
        content: safePrompt,
      },
    ],
  });

  console.log("Original prompt:");
  console.log(userPrompt);

  console.log("\nPrompt sent to LLM:");
  console.log(safePrompt);

  console.log("\nLLM response:");
  console.log(res.choices[0].message.content);
}

await run();
