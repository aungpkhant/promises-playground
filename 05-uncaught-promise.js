// ! Error doesnt get caught as it is wrapped in a promise
// !

import logger from "./logger.js";

async function thisThrows() {
  throw new Error("Thrown from thisThrows()");
}

async function myFunctionThatCatches() {
  try {
    return await thisThrows(); // <-- Notice we added here the "await" keyword.
  } catch (e) {
    console.error(e);
  } finally {
    console.log("We do cleanup here");
  }
  return "Nothing found";
}

async function run() {
  const myValue = await myFunctionThatCatches();
  console.log(myValue);
}

run();

// https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a
