import groq from "./groqClient.js";

/**
 * Executes a single LLM call.
 * This function must ONLY talk to the LLM.
 * No prompt logic, no safety logic, no formatting logic.
 */
export default async function executeLLM({ prompt, temperature, model }) {
  // Defensive guard (prevents silent failures)
  if (!prompt || typeof prompt !== "string") {
    throw new Error("executeLLM: prompt must be a non-empty string");
  }

  const res = await groq.chat.completions.create({
    model,
    temperature,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return res.choices[0].message.content;
}
