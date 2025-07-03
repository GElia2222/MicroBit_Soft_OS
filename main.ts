radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 93222454511) {
        Kitronik_VIEWTEXT32.clearDisplay()
        Kitronik_VIEWTEXT32.showString("SoftLink Connected:")
    } else {
    	
    }
})
function SoftLink () {
    radio.setGroup(998)
    Kitronik_VIEWTEXT32.showString("Pairing with SoftLink")
    radio.sendNumber(93222454511)
}
input.onButtonPressed(Button.A, function () {
    if (Ready == 1) {
        basic.showNumber(input.temperature())
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    Boot_SoftOS()
    basic.clearScreen()
    Kitronik_VIEWTEXT32.clearDisplay()
    basic.showIcon(IconNames.Yes)
    Kitronik_VIEWTEXT32.showString("Welcome to SoftOS!")
    basic.pause(1000)
    Kitronik_VIEWTEXT32.clearDisplay()
})
input.onButtonPressed(Button.B, function () {
    if (Ready == 1) {
        SoftLink()
    } else {
    	
    }
})
function Boot_SoftOS () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "BOOTING SOFTOS..")
    Kitronik_VIEWTEXT32.clearDisplay()
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "Syncing compass..")
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "Checking for Updates..")
    basic.pause(2000)
    Kitronik_VIEWTEXT32.clearDisplayLine(Kitronik_VIEWTEXT32.DisplayLine.Top)
    basic.pause(2000)
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "Updating.. (1)")
    basic.pause(5000)
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "Updating.. (2)")
    basic.pause(200)
    Kitronik_VIEWTEXT32.clearDisplay()
    Kitronik_VIEWTEXT32.showString("waiting for software..")
    basic.pause(500)
    Ready = 1
}
let Ready = 0
Ready = 0
