input.onPinPressed(TouchPin.P2, function () {
    if (angulo == 0) {
        angulo = 90
    } else {
        angulo = 0
    }
    pins.servoWritePin(AnalogPin.P1, angulo)
})
let angulo = 0
pins.servoWritePin(AnalogPin.P1, angulo)
