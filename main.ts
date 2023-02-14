maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
basic.pause(500)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
basic.pause(500)
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        basic.pause(1000)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
