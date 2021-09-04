import logger from "./logger.js";

logger.log("Starting execution");
try {
  throw new Error("A typical error");
} catch (error) {
  logger.error(error.message);

  throw new Error("Not your everyday error in the catch block");
}
logger.log("Ending execution");
