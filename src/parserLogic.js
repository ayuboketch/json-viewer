export default function parserLogic(input) {
  try {
    const parsed = JSON.parse(input);
    return { output: JSON.stringify(parsed, null, 2), error: "" };
  } catch (err) {
    return { output: "", error: err.message };
  }
}
