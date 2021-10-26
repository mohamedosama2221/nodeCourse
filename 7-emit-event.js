const EmitEvents = require("events");

const customEvents = new EmitEvents();

customEvents.on("response", (user, age) => {
  console.log(`data send ${user} and his age is ${age}`);
});

customEvents.emit("response", "john", 36);
