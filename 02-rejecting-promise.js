/*
! things to note: thisThrows returns a Promise that rejects with the error
! thisThrows() function call is not handled properly with either then/catch chain or await
! Note the Cleanup log in the 2 solutions
*/

import logger from "./logger.js";

async function thisThrows() {
  throw new Error("Thrown from thisThrows() method");
}

try {
  thisThrows();
} catch (err) {
  logger.error(err.message);
} finally {
  logger.log("Cleanup if exists");
}

// * Solution 1

// try {
//   thisThrows().catch((err) => {
//     logger.error(err.message);
//     logger.info("Error handled with catch");
//   });
// } catch (err) {
//   logger.error(err.message);
// } finally {
//   logger.log("Cleanup if exists");
// }

// * Solution 2

// (async function run() {
//   try {
//     await thisThrows();
//   } catch (err) {
//     logger.error(err.message);
//   } finally {
//     logger.log("Cleanup if exists");
//   }
// })();
