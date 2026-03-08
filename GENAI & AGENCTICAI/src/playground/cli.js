import readlineSync from "readline-sync";

const MODE_ALIASES = {
  normal: "normal",
  instruction: "instruction",
  role: "role",
  json: "json",
  fewshot: "fewShot",
  fewShot: "fewShot",
  few_shot: "fewShot",
  multistep: "multiStep",
  multiStep: "multiStep",
  multi_step: "multiStep",
};

/**
 * Collects user input from CLI.
 * Returns a normalized input object.
 */
export default function getCliInput() {
  const compare = readlineSync.keyInYN(
    "Run side-by-side comparison across all modes?"
  );

  const prompt = readlineSync.question("Enter your prompt: ");

  const mode = readlineSync.question(
    "Choose mode (normal | instruction | role | json | fewShot | multiStep): "
  );

  const temperatureInput = readlineSync.question(
    "Temperature (0 to 1, default 0.3): "
  );

  const temperature = temperatureInput === "" ? 0.3 : Number(temperatureInput);

  return {
    prompt,
    mode,
    temperature,
    compare,
  };
}
