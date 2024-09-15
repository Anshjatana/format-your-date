type DateFormat =
  | "dd-mm-yyyy"
  | "mm-dd-yyyy"
  | "yyyy-mm-dd"
  | "dd/mm/yyyy"
  | "mm/dd/yyyy"
  | "yyyy/mm/dd"
  | "fullDate"
  | "dd-mmm-yyyy"
  | "dd-mmmm-yyyy"
  | "mmmm-dd-yyyy"
  | "mmm-dd-yyyy"
  | "iso" // ISO 8601 format
  | "timestamp"; // Milliseconds since epoch

export class DateFormatter {
  // Helper method to get month name
  private static getMonthName(
    monthIndex: number,
    full: boolean = false,
    casing: "upper" | "lower" | "title" = "title"
  ): string {
    const months = full
      ? [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]
      : [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

    const monthName = months[monthIndex];
    return this.applyCase(monthName, casing);
  }

  // Custom separator and case
  private static applyCase(
    text: string,
    casing: "upper" | "lower" | "title"
  ): string {
    switch (casing) {
      case "upper":
        return text.toUpperCase();
      case "lower":
        return text.toLowerCase();
      case "title":
      default:
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
  }

  // Format: dd-mm-yyyy
  static formatToDDMMYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // Format: mm-dd-yyyy
  static formatToMMDDYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  }

  // Format: yyyy-mm-dd
  static formatToYYYYMMDD(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  // Format: dd/mm/yyyy
  static formatToDDMMYYYYSlash(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Format: mm/dd/yyyy
  static formatToMMDDYYYYSlash(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  // Format: yyyy/mm/dd
  static formatToYYYYMMDDSlash(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}/${month}/${day}`;
  }

  // Full date string (e.g., 'Wednesday, 24 August 2024')
  static formatToFullDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  }

  // Format: dd-mmm-yyyy (24 Aug, 2024)
  static formatToDDMMMYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = DateFormatter.getMonthName(date.getMonth());
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  // Format: dd-mmmm-yyyy (24 August, 2024)
  static formatToDDMMMMYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = DateFormatter.getMonthName(date.getMonth(), true);
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  // Format: mmmm-dd-yyyy (August 24, 2024)
  static formatToMMMMDDYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = DateFormatter.getMonthName(date.getMonth(), true);
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  // Format: mmm-dd-yyyy (Aug 24, 2024)
  static formatToMMMDDYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = DateFormatter.getMonthName(date.getMonth());
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  static formatDate(date: Date, format: DateFormat): string {
    switch (format) {
      case "dd-mm-yyyy":
        return DateFormatter.formatToDDMMYYYY(date);
      case "mm-dd-yyyy":
        return DateFormatter.formatToMMDDYYYY(date);
      case "yyyy-mm-dd":
        return DateFormatter.formatToYYYYMMDD(date);
      case "dd/mm/yyyy":
        return DateFormatter.formatToDDMMYYYYSlash(date);
      case "mm/dd/yyyy":
        return DateFormatter.formatToMMDDYYYYSlash(date);
      case "yyyy/mm/dd":
        return DateFormatter.formatToYYYYMMDDSlash(date);
      case "fullDate":
        return DateFormatter.formatToFullDate(date);
      case "dd-mmm-yyyy":
        return DateFormatter.formatToDDMMMYYYY(date);
      case "dd-mmmm-yyyy":
        return DateFormatter.formatToDDMMMMYYYY(date);
      case "mmmm-dd-yyyy":
        return DateFormatter.formatToMMMMDDYYYY(date);
      case "mmm-dd-yyyy":
        return DateFormatter.formatToMMMDDYYYY(date);
      default:
        throw new Error("Date format not supported");
    }
  }

  // Time Support (HH:mm, hh:mm A)
  static formatToTime(date: Date, format: "24-hour" | "12-hour"): string {
    const hours24 = date.getHours();
    const hours12 = hours24 % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours24 >= 12 ? "PM" : "AM";

    return format === "24-hour"
      ? `${String(hours24).padStart(2, "0")}:${minutes}`
      : `${String(hours12).padStart(2, "0")}:${minutes} ${ampm}`;
  }

  // ISO 8601 Format
  static formatToISO(date: Date): string {
    return date.toISOString();
  }

  // Timestamp
  static formatToTimestamp(date: Date): number {
    return date.getTime();
  }

  // Custom separator for date formatting
  static formatWithCustomSeparator(
    date: Date,
    separator: string,
    format: DateFormat
  ): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    let monthFormatted: string;

    if (format.includes("mmm")) {
      // Get the abbreviated month name using the existing helper
      monthFormatted = this.getMonthName(date.getMonth(), false); // 'Aug', 'Sept', etc.
    } else {
      monthFormatted = month;
    }

    if (format.includes("dd")) {
      return `${day}${separator}${monthFormatted}${separator}${year}`;
    } else if (format.includes("mm")) {
      return `${monthFormatted}${separator}${day}${separator}${year}`;
    } else {
      return `${year}${separator}${monthFormatted}${separator}${day}`;
    }
  }

  // Relative Time (e.g., '2 days ago', 'in 5 hours')
  static formatToRelativeTime(date: Date): string {
    const now = new Date();
    const diffInSeconds = (now.getTime() - date.getTime()) / 1000;
    const minutes = Math.abs(diffInSeconds) / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    if (minutes < 60) {
      return diffInSeconds < 0
        ? `in ${Math.round(minutes)} minutes`
        : `${Math.round(minutes)} minutes ago`;
    } else if (hours < 24) {
      return diffInSeconds < 0
        ? `in ${Math.round(hours)} hours`
        : `${Math.round(hours)} hours ago`;
    } else {
      return diffInSeconds < 0
        ? `in ${Math.round(days)} days`
        : `${Math.round(days)} days ago`;
    }
  }

  // Parsing date strings
  static parseDate(dateString: string, format: DateFormat): Date {
    const parts = dateString.split(/[-\/]/);
    let day, month, year;

    switch (format) {
      case "dd-mm-yyyy":
        [day, month, year] = parts;
        break;
      case "mm-dd-yyyy":
        [month, day, year] = parts;
        break;
      case "yyyy-mm-dd":
        [year, month, day] = parts;
        break;
      default:
        throw new Error("Format not supported for parsing.");
    }

    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  // Human-readable time (e.g., yesterday, today, tomorrow)
  static formatToHumanReadable(date: Date): string {
    const now = new Date();
    const daysDiff = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);

    if (daysDiff < -1) return "tomorrow";
    if (daysDiff < 0) return "today";
    if (daysDiff < 1) return "yesterday";
    return `${Math.abs(Math.round(daysDiff))} days ago`;
  }

  // Utility Functions
  static isValidDate(date: any): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  }

  static isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  static daysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  static weekNumber(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 1);
    const diff = date.getTime() - start.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) + 1;
  }
}