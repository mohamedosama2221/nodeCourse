console.log("first"); //will run first
setTimeout(() => {
  //will run last even so the time is set to zero but this is async so it get offloaded by the event loop so only after we are done with our immediate code (our sync code only then we execute the call back which is in case the console log of the setTimeout)
  console.log("second");
}, 0);
console.log("third"); //will run second
