export default {
  prepare(prompt) {
    return `
Step 1: Explain the concept simply.
Step 2: Give one example.
Step 3: Summarize in one line.

Topic:
${prompt}
`;
},
};
