import colors from "colors";

colors.enable();

export default {
  log: (message) => console.log(message),
  error: (message) => console.log(message.red),
  warn: (message) => console.log(message.yellow),
  info: (message) => console.log(message.blue),
};
