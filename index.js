const robot = require("robotjs");
const notifier = require('node-notifier');
const path = require('path');
const time=new Date().toISOString();
setTimeout(() => {
    notifier.notify({
        title: 'Timer Start',
        icon: path.join(__dirname, 'coulson.png'),
        message:time
      });
    robot.mouseClick();
    }, 5000);
    
    

setInterval(() => {
    notifier.notify({
        title: 'Timer Running',
        icon: path.join(__dirname, 'coulson.png'),
        message:time
      });
robot.mouseClick();
}, 120000);


