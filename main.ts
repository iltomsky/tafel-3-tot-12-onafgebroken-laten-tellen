let getal = 0
basic.forever(function () {
    basic.showNumber(getal)
    if (getal < 12) {
        getal += 3
        basic.pause(500)
    } else {
        getal = 0
    }
})
