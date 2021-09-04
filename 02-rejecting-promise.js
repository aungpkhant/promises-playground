function thisThrows() {
  throw new Error("Thrown from thisThrows() method");
}

try {
  thisThrows();
} catch (err) {
  console.error(err.message);
} finally {
  console.log("Cleanup if exists");
}
