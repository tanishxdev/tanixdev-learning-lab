export function validateEnv() {
  const required = ["GEMINI_API_KEY", "PORT"];

  required.forEach((k) => {
    if (!process.env[k]) {
      console.error(`❌ Missing ENV variable: ${k}`);
      process.exit(1);
    }
  });

  console.log("ENV validation successful.");
}
