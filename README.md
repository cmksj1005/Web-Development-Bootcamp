# ThinkThatch

This JavaScript counting function provides smooth number animations for counters on your webpage. It offers customizable features such as decimal precision, counting pace, reverse counting, and support for negative numbers.

## Features

- Smooth number animations for counters
- Customizable decimal precision
- Adjustable counting pace (animation speed)
- Support for reverse counting
- Handles negative numbers

## How to start

### Counter Class

id: Use this to link to the Extra Counter Class. (no need to use it if you don't want to use the extra counter)
data-from: The starting number of the counter.
data-to: The ending number of the counter.
isDecimalNum: Determines whether the counter is a decimal number or not (0 = whole number, 1 = decimal number).
exponent: Specifies the number of decimal places for the counter.

### Extra Counter Class

The extraCounter class creates a secondary counter that simulates a faster counting animation, typically displayed alongside the main counter. It updates the number rapidly in a looping fashion until the main counter finishes.

associatedId: Links the extra counter to the main counter using the class ID.
data: The number the extra counter will display once the main counter stops.
