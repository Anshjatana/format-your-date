// index.ts

type DateFormat =
  | 'dd-mm-yyyy' // 24-08-2024
  | 'mm-dd-yyyy' // 08-24-2024
  | 'yyyy-mm-dd' // 2024-08-24
  | 'dd/mm/yyyy' // 24/08/2024
  | 'mm/dd/yyyy' // 08/24/2024
  | 'yyyy/mm/dd' // 2024/08/24
  | 'fullDate' // Wednesday, 24 August 2024
  | 'dd-mmm-yyyy' // 24 Aug, 2024
  | 'dd-mmmm-yyyy' // 24 August, 2024
  | 'mmmm-dd-yyyy' // August 24, 2024
  | 'mmm-dd-yyyy'; // Aug 24, 2024

  export class DateFormatter {
  // Helper method to get month name
  private static getMonthName(monthIndex: number, full: boolean = false): string {
    const months = full
      ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[monthIndex];
  }

  // Format: dd-mm-yyyy
  static formatToDDMMYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // Format: mm-dd-yyyy
  static formatToMMDDYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  }

  // Format: yyyy-mm-dd
  static formatToYYYYMMDD(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

   // Format: dd/mm/yyyy
  static formatToDDMMYYYYSlash(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Format: mm/dd/yyyy
  static formatToMMDDYYYYSlash(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  // Format: yyyy/mm/dd
  static formatToYYYYMMDDSlash(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}/${month}/${day}`;
  }

  // Full date string (e.g., 'Wednesday, 24 August 2024')
  static formatToFullDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  }

  // Format: dd-mmm-yyyy (24 Aug, 2024)
  static formatToDDMMMYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = DateFormatter.getMonthName(date.getMonth());
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  // Format: dd-mmmm-yyyy (24 August, 2024)
  static formatToDDMMMMYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = DateFormatter.getMonthName(date.getMonth(), true);
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  // Format: mmmm-dd-yyyy (August 24, 2024)
  static formatToMMMMDDYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = DateFormatter.getMonthName(date.getMonth(), true);
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  // Format: mmm-dd-yyyy (Aug 24, 2024)
  static formatToMMMDDYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = DateFormatter.getMonthName(date.getMonth());
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  // General method to format date based on a given format
  static formatDate(date: Date, format: DateFormat): string {
    switch (format) {
      case 'dd-mm-yyyy':
        return DateFormatter.formatToDDMMYYYY(date);
      case 'mm-dd-yyyy':
        return DateFormatter.formatToMMDDYYYY(date);
      case 'yyyy-mm-dd':
        return DateFormatter.formatToYYYYMMDD(date);
      case 'dd/mm/yyyy':
        return DateFormatter.formatToDDMMYYYYSlash(date);
      case 'mm/dd/yyyy':
        return DateFormatter.formatToMMDDYYYYSlash(date);
      case 'yyyy/mm/dd':
        return DateFormatter.formatToYYYYMMDDSlash(date);
      case 'fullDate':
        return DateFormatter.formatToFullDate(date);
      case 'dd-mmm-yyyy':
        return DateFormatter.formatToDDMMMYYYY(date);
      case 'dd-mmmm-yyyy':
        return DateFormatter.formatToDDMMMMYYYY(date);
      case 'mmmm-dd-yyyy':
        return DateFormatter.formatToMMMMDDYYYY(date);
      case 'mmm-dd-yyyy':
        return DateFormatter.formatToMMMDDYYYY(date);
      default:
        throw new Error('Date format not supported');
    }
  }
}

// Example usage
// const date = new Date();
// console.log(DateFormatter.formatDate(date, 'dd-mmm-yyyy'));
// console.log(DateFormatter.formatDate(date, 'mmmm-dd-yyyy'));
