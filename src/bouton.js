import GPIO from "rpi-gpio";
GPIO.on('change', (channel,value)=>{
    console.log(channel,value)
});
GPIO.setup(7, GPIO.DIR_IN, GPIO.EDGE_BOTH);