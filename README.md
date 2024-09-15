# format-your-date

`format-your-date` is a lightweight and flexible Node.js package for formatting JavaScript `Date` objects into various customizable date formats. Whether you need a simple date format or a more complex one with full month names, this package has you covered.

## Features

- Supports multiple date formats, including numeric and text-based month representations
- Customizable date separator options
- Lightweight and easy to use
- Written in TypeScript for type safety
- Compatible with modern JavaScript environments

## Installation

Install the package via npm:

```bash
npm install format-your-date
```

## Usage

### Importing the Package

```bash
import { DateFormatter } from 'format-your-date';
```

### Basic Formating
You can easily format a Date object into various formats as shown below.

```bash
const date = new Date();

console.log(DateFormatter.formatDate(date, 'dd-mm-yyyy')); // Output: 24-08-2024
console.log(DateFormatter.formatDate(date, 'fullDate')); // Output: Saturday, 24 August 2024
```

### Custom Separator

You can use a custom separator (like . or /) between the date components.

```bash
console.log(DateFormatter.formatWithCustomSeparator(date, '/', 'dd-mm-yyyy')); // Output: 24/08/2024
console.log(DateFormatter.formatWithCustomSeparator(date, '.', 'yyyy-mm-dd')); // Output: 2024.08.24
```

## Supported Formats

The package supports a variety of date formats, allowing flexibility in how you want your date to be displayed:

| Format           | Example Output           |
|------------------|--------------------------|
| `dd-mm-yyyy`     | 24-08-2024               |
| `mm-dd-yyyy`     | 08-24-2024               |
| `yyyy-mm-dd`     | 2024-08-24               |
| `dd/mm/yyyy`     | 24/08/2024               |
| `mm/dd/yyyy`     | 08/24/2024               |
| `yyyy/mm/dd`     | 2024/08/24               |
| `fullDate`       | Saturday, 24 August 2024 |
| `dd-mmm-yyyy`    | 24 Aug, 2024             |
| `dd-mmmm-yyyy`   | 24 August, 2024          |
| `mmm-dd-yyyy`    | Aug 24, 2024             |
| `mmmm-dd-yyyy`   | August 24, 2024          |

### Customizing Format
In the format string:
- `dd`: Day of the month (2 digits)
- `mm`: Month as a number (2 digits)
- `mmm`: Month as a short name (e.g., Aug)
- `mmmm`: Full month name (e.g., August)
- `yyyy`: Full year (e.g., 2024)

### Functions

### `formatDate(date: Date, format: DateFormat): string`

Formats a `Date` object into the specified format.

**Parameters:**
- `date`: The JavaScript `Date` object to be formatted.
- `format`: A string representing the desired date format (e.g., `dd-mm-yyyy`).

**Returns:** 
- A string representing the formatted date.

**Example:**

```bash
const date = new Date();

// Basic formats
console.log(DateFormatter.formatDate(date, 'dd-mm-yyyy')); // Output: 24-08-2024
console.log(DateFormatter.formatDate(date, 'mm-dd-yyyy')); // Output: 08-24-2024
console.log(DateFormatter.formatDate(date, 'yyyy-mm-dd')); // Output: 2024-08-24

// Full date
console.log(DateFormatter.formatDate(date, 'fullDate')); // Output: Saturday, 24 August 2024

// Month names
console.log(DateFormatter.formatDate(date, 'dd-mmm-yyyy')); // Output: 24 Aug, 2024
console.log(DateFormatter.formatDate(date, 'dd-mmmm-yyyy')); // Output: 24 August, 2024
console.log(DateFormatter.formatDate(date, 'mmmm-dd-yyyy')); // Output: August 24, 2024
console.log(DateFormatter.formatDate(date, 'mmm-dd-yyyy')); // Output: Aug 24, 2024

// ISO and timestamp
console.log(DateFormatter.formatToISO(date)); // Output: 2024-08-24T00:00:00.000Z
console.log(DateFormatter.formatToTimestamp(date)); // Output: 1692844800000 (example)

const customSeparatorDate = new DateFormatter();
console.log(customSeparatorDate.formatWithCustomSeparator(date, '/', 'dd/mm/yyyy')); // Output: 24/08/2024

// Time formats
console.log(DateFormatter.formatToTime(date, '24-hour')); // Output: 00:00
console.log(DateFormatter.formatToTime(date, '12-hour')); // Output: 12:00 AM

// Relative time
console.log(DateFormatter.formatToRelativeTime(new Date(new Date().getTime() - 3600000))); // Output: 1 hour ago

// Parsing date
console.log(DateFormatter.parseDate('24-08-2024', 'dd-mm-yyyy')); // Output: Sat Aug 24 2024 ...

// Human-readable time
console.log(DateFormatter.formatToHumanReadable(new Date())); // Output: today

// Utility functions
console.log(DateFormatter.isValidDate(new Date())); // Output: true
console.log(DateFormatter.isLeapYear(2024)); // Output: true
console.log(DateFormatter.daysInMonth(2024, 1)); // Output: 29
console.log(DateFormatter.weekNumber(new Date())); // Output: 34 (example)

```


## Development

To contribute or modify the package, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Anshjatana/format-your-date.git
```

2. Install the dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

This will generate the files in the `dist/` folder.

4. Test your changes locally before publishing or submitting a pull request.

## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, feel free to open an issue or create a pull request.
GitHub Repo: [Repository](https://github.com/Anshjatana/format-your-date)


## Author
👤 Ansh Jatana

* [Portfolio](https://portfolio-anshh.netlify.app/)
* [LinkedIn](https://www.linkedin.com/in/ansh-jatana-10b446205/)
* [GitHub](https://github.com/Anshjatana)
* [Twitter(x)](https://x.com/anshh_jatana)

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## This project was created with ❤️ by Ansh Jatana
