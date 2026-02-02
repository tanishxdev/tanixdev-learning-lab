export default {
  prepare(prompt) {
    return `
Return ONLY valid JSON.
No explanation.
Schema:
{
  "definition": "string",
  "example": "string"
}

Topic:
${prompt}
`;
  },
};
