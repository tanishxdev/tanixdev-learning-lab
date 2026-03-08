export default {
  prepare(prompt) {
    return `
You are a senior software engineer teaching a beginner.
Answer clearly and simply.

Question:
${prompt}
`;
  },
};
