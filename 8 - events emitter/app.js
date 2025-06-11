const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, years) => {
  console.log("data recieved");
  console.log("name:", name);
  console.log("years:", years);
});

customEmitter.on("response", () => {
  console.log("another logic here");
});

customEmitter.emit("response", "john", 34);
