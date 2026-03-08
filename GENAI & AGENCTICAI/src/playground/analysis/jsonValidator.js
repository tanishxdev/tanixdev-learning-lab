export default function validateJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
