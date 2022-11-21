var robot = require("robotjs");


setTimeout(() => {
    console.info(new Date().toISOString())
    robot.mouseClick();
    }, 10000);
    
    

setInterval(() => {
console.info(new Date().toISOString())
robot.mouseClick();
}, 120000);


