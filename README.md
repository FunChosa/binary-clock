# Binary Clock

A simple and visually appealing binary clock application that displays the current time and date in binary format. Each digit is represented using four LEDs (simulated with colored circles).

## Project Setup

1. **Clone the repository:** `git clone https://github.com/FunChosa/binary-clock.git`
2. **Navigate to the project directory:** `cd binary-clock`
3. **Install dependencies:** `npm install`
4. **Start the development server:** `npm run dev`

## Features

* Real-time display: The clock dynamically updates to show the current time and date.
* Binary representation: Time (hours, minutes, seconds) and date (day, month, year) are shown using binary code.
* Clear visual design: Each binary digit is represented by four LEDs (circles) that illuminate to represent 1s and 0s.
* Intuitive interface: Simple and easy to understand display.
* Standard format display: The current time and date are also displayed below the binary representation in a standard, easily readable format.

## Technology Stack

* React: ^18.3.1
* Vite: ^5.4.10

## State Management

The application's state is managed using the `useState` hook.

### Binary Conversion Algorithm

The application uses a custom algorithm to convert decimal digits into their 4-bit binary representations.  This algorithm is implemented in the `divide` function:

The `divide` function takes a two-digit decimal number as input and returns an array containing two strings. Each string represents the binary equivalent of the tens and units digits, respectively, padded to four bits.

1. **Tens Digit Extraction:**  `Math.floor(element / 10)` extracts the tens digit using integer division.
2. **Units Digit Extraction:** `element % 10` extracts the units digit using the modulo operator.
3. **Binary Conversion:** `.toString(2)` converts each digit to its binary representation.
4. **Padding:** `.padStart(4, "0")` pads the binary strings with leading zeros to ensure a consistent 4-bit representation.

## Deployment

The application is deployed on Netlify: https://funchosa-binary-clock.netlify.app

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
