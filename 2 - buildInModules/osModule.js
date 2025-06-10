const os = require('os');

console.log('--- OS MODULE ---');


const user = os.userInfo();
console.log(user);
console.log('system uptime is: ' + os.uptime() + ' seconds');

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);