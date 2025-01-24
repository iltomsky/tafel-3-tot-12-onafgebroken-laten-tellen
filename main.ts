input.onButtonPressed(Button.A, function () {
    basic.showNumber(getal)
    if (getal < 13) {
        getal += 3
    } else {
        basic.clearScreen()
    }
})
let getal = 0
getal = 0
