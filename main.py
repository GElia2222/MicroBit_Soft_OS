def on_button_pressed_a():
    if Ready == 1:
        basic.show_number(input.compass_heading())
    else:
        Boot_SoftOS()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    Boot_SoftOS()
    basic.clear_screen()
    Kitronik_VIEWTEXT32.clear_display()
    basic.show_icon(IconNames.YES)
    Kitronik_VIEWTEXT32.show_string("Welcome to SoftOS!")
    basic.pause(1000)
    Kitronik_VIEWTEXT32.clear_display()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def Boot_SoftOS():
    global Ready
    basic.show_leds("""
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
        . . . . .
        # # # # .
        . . . . .
        . . . . .
        """)
    basic.pause(2000)
    basic.show_leds("""
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        """)
    Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "BOOTING SOFTOS..")
    Kitronik_VIEWTEXT32.clear_display()
    Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "Syncing compass...")
    Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "Updating..")
    basic.pause(2000)
    Kitronik_VIEWTEXT32.clear_display_line(Kitronik_VIEWTEXT32.DisplayLine.TOP)
    basic.pause(2000)
    Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "Updating.. (2)")
    basic.pause(5000)
    Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "Updating.. (3)")
    basic.pause(200)
    Kitronik_VIEWTEXT32.clear_display()
    Kitronik_VIEWTEXT32.show_string("waiting for software..")
    Ready = 1
Ready = 0
Ready = 0