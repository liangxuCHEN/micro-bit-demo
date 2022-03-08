let 步数 = 0
input.onButtonPressed(Button.A, function () {
    步数 = 0
})
input.onGesture(Gesture.Shake, function () {
    步数 = 步数 + 1
})
basic.forever(function () {
    basic.showNumber(步数)
})
