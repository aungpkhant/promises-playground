import logger from "./logger.js";

function functionThatThrows() {
  throw new Error("Thrown from functionThatThrows()");
}
function functionThatCallsAnotherFunctionThatThrows() {
  functionThatThrows();
}

try {
  functionThatCallsAnotherFunctionThatThrows();
} catch (err) {
  logger.error(err.message);
} finally {
  logger.log("Cleanup if exists");
}
