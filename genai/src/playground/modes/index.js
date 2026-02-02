import normal from "./normal.js";
import instruction from "./instruction.js";
import role from "./role.js";
import json from "./json.js";
import fewShot from "./fewShot.js";
import multiStep from "./multiStep.js";

const modes = {
  normal,
  instruction,
  role,
  json,
  fewShot,
  multiStep,
};

export function getModeHandler(mode) {
  if (!modes[mode]) {
    throw new Error(`Unknown mode: ${mode}`);
  }
  return modes[mode];
}
