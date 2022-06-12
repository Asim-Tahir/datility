declare global {
  interface Date {
    /**
     * @name subtractDays
     * @category Manipulate / Subtract
     * @summary Subtract day(s) to date
     *
     * @description
     * Subtract day(s) to date
     *
     * @param days amount of day(s) to subtract
     * @returns date with subtracted day(s)
     *
     * @example
     * ```ts
     * new Date(2022, 5, 15).subtractDays(10) // => "Sun Jun 05 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * new Date(2022, 5, 15).subtractDays(-10) // => "Sat Jun 25 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * ```
     */
    subtractDays(days: number): Date;

    /**
     * @name subtractWeeks
     * @category Manipulate / Subtract
     * @summary Subtract week(s) to date
     *
     * @description
     * Subtract week(s) to date
     *
     * @param weeks amount of week(s) to subtract
     * @returns date with subtracted week(s)
     *
     * @example
     * ```ts
     * new Date(2022, 5, 15).subtractWeeks(2) // => "Wed Jun 01 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * new Date(2022, 5, 1).subtractWeeks(-2) // => "Wed Jun 15 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * ```
     */
    subtractWeeks(weeks: number): Date;

    /**
     * @name subtractMonths
     * @category Manipulate / Subtract
     * @summary Subtract month(s) to date
     *
     * @description
     * Subtract month(s) to date
     *
     * @param months amount of month(s) to subtract
     * @returns date with subtracted month(s)
     *
     * @example
     * ```ts
     * new Date(2022, 5, 15).subtractMonths(2) // => "Fri Apr 15 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * new Date(2022, 5, 15).subtractMonths(-2) // => "Mon Aug 15 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * ```
     */
    subtractMonths(months: number): Date;

    /**
     * @name subtractYears
     * @category Manipulate / Subtract
     * @summary Subtract year(s) to date
     *
     * @description
     * Subtract year(s) to date
     *
     * @param years amount of year(s) to subtract
     * @returns date with subtracted year(s)
     *
     * @example
     * ```ts
     * new Date(2022, 5, 15).subtractYears(2) // => "Mon Jun 15 2020 00:00:00 GMT+0300 (GMT+03:00)"
     * new Date(2022, 5, 15).subtractYears(-2) // => "Sat Jun 15 2024 00:00:00 GMT+0300 (GMT+03:00)"
     * ```
     */
    subtractYears(years: number): Date;
  }
}

Date.prototype.subtractDays = function (days: number): Date {
  this.setDate(this.getDate() - days);

  return this;
};

Date.prototype.subtractWeeks = function (weeks: number): Date {
  this.setDate(this.getDate() - weeks * 7);

  return this;
};

Date.prototype.subtractMonths = function (months: number): Date {
  this.setMonth(this.getMonth() - months);

  return this;
};

Date.prototype.subtractYears = function (years: number): Date {
  this.setFullYear(this.getFullYear() - years);

  return this;
};

export {};
