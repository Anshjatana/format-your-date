# format-your-date

`format-your-date` is a lightweight and flexible Node.js package for formatting JavaScript `Date` objects into various customizable date formats. Whether you need a simple date format or a more complex one with full month names, this package has you covered.

## Features

- Supports multiple date formats
- Lightweight and easy to use
- Written in TypeScript for type safety
- Compatible with modern JavaScript environments

## Installation

Install the package via npm:

```bash
npm install format-your-date
```

## Usage

```bash
import { DateFormatter } from 'format-your-date';

const date = new Date();

console.log(DateFormatter.formatDate(date, 'dd-mm-yyyy')); // Output: 24-08-2024
console.log(DateFormatter.formatDate(date, 'fullDate')); // Output: Saturday, 24 August 2024
```

## Supported Formats
* dd-mm-yyyy (e.g., 24-08-2024)
* mm-dd-yyyy (e.g., 08-24-2024)
* yyyy-mm-dd (e.g., 2024-08-24)
* dd/mm/yyyy (e.g., 24/08/2024)
* mm/dd/yyyy (e.g., 08/24/2024)
* yyyy/mm/dd (e.g., 2024/08/24)
* fullDate (e.g., Saturday, 24 August 2024)
* dd-mmm-yyyy (e.g., 24 Aug, 2024)
* dd-mmmm-yyyy (e.g., 24 August, 2024)
* mmmm-dd-yyyy (e.g., August 24, 2024)
* mmm-dd-yyyy (e.g., Aug 24, 2024)


## Parameters:

1. date: The date to be formatted.
2. format: The format in which the date should be returned. Supported formats are listed above.
* Returns: A string representing the formatted date.


## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, feel free to open an issue or create a pull request.
GitHub Repo: 


## Author
👤 Ansh Jatana

* [Portfolio](https://portfolio-anshh.netlify.app/)
* [LinkedIn](https://www.linkedin.com/in/ansh-jatana-10b446205/)
* [GitHub](https://github.com/Anshjatana)
* [Twitter(x)](https://x.com/anshh_jatana)

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## This project was created with ❤️ by Ansh Jatana
