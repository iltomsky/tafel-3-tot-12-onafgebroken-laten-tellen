let tafel_3 = 0
basic.forever(function () {
    let getal = 0
    basic.showNumber(getal)
    tafel_3 += 3
    if (tafel_3 >= 12) {
        basic.showNumber(0)
    }
})
