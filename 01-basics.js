// Sources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a

// Syntax

// This promise will either reject/reslove with 50% chance of each
// after a specified number of milliseconds
const timedRandomPromise = (timeOutInMilliseconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldResolve = Math.random() < 0.5;
      if (shouldResolve) {
        resolve({
          status: "success",
        });
      }
      reject(new Error("fail"));
    }, timeOutInMilliseconds);
  });
};

timedRandomPromise(500)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err.message);
  });
