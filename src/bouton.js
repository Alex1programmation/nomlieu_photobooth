import {Gpio} from "onoff"
console.log('init ... ')
const button = new Gpio(7,'in','both');
button.watch((err,value) => {
if (err) throw err;
    console.log('button',value)
})
console.log('init done')