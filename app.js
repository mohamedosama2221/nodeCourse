const os = require("os");

const osInfo = {
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  uptime: os.uptime(),
  name: os.type(),
  release: os.release(),
};
console.log(osInfo);
