basic.forever(function () {
    if (input.acceleration(Dimension.X) < -20) {
        basic.showString("Hello!")
    }
    if (input.acceleration(Dimension.X) > 20) {
        basic.showString("")
    }
    basic.showString("")
    if (input.acceleration(Dimension.Y) > 20) {
        basic.showString("")
    }
    if (input.acceleration(Dimension.Y) < -20) {
        basic.showString("")
    }
})
