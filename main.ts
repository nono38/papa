input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(0)
})
function LireCarte () {
    return 4 * pins.digitalReadPin(DigitalPin.P8) + (2 * pins.digitalReadPin(DigitalPin.P12) + pins.digitalReadPin(DigitalPin.P16) * 1)
}
pins.onPulsed(DigitalPin.P8, PulseValue.Low, function () {
    basic.showNumber(8)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(2)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(1)
})
pins.onPulsed(DigitalPin.P16, PulseValue.Low, function () {
    basic.showNumber(16)
})
pins.onPulsed(DigitalPin.P12, PulseValue.Low, function () {
    basic.showNumber(12)
})
let inter2 = 0
let inter1 = 0
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
basic.forever(function () {
    inter1 = pins.digitalReadPin(DigitalPin.P11)
    inter2 = pins.digitalReadPin(DigitalPin.P5)
})
