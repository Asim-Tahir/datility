declare global {
  interface Date {
    /**
     * @name addDays
     * @category Manipulate / Add
     * @summary Add day(s) to date
     *
     * @description
     * Add day(s) to date
     *
     * @param days amount of days to add
     * @returns date with added days
     *
     * @example
     * ```ts
     * new Date(2022, 5, 5).addDays(10) // => "Wed Jun 15 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * new Date(2022, 5, 5).addDays(-10) // => "Thu May 26 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * ```
     */
    addDays(days: number): Date;

    /**
     * @name addWeeks
     * @category Manipulate / Add
     * @summary Add week(s) to date
     *
     * @description
     * Add week(s) to date
     *
     * @param weeks amount of week(s) to add
     * @returns date with added week(s)
     *
     * @example
     * ```ts
     * new Date(2022, 5, 5).addWeeks(2) // => "Sun Jun 19 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * new Date(2022, 5, 5).addWeeks(-2) // => "Sun May 22 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * ```
     */
    addWeeks(weeks: number): Date;

    /**
     * @name addMonths
     * @category Manipulate / Add
     * @summary Add month(s) to date
     *
     * @description
     * Add month(s) to date
     *
     * @param months amount of month(s) to add
     * @returns date with added month(s)
     *
     * @example
     * ```ts
     * new Date(2022, 5, 5).addMonths(2) // => "Fri Aug 05 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * new Date(2022, 5, 5).addMonths(-2) // => "Tue Apr 05 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * ```
     */
    addMonths(months: number): Date;

    /**
     * @name addYears
     * @category Manipulate / Add
     * @summary Add year(s) to date
     *
     * @description
     * Add year(s) to date
     *
     * @param years amount of year(s) to add
     * @returns date with added year(s)
     *
     * @example
     * ```ts
     * new Date(2022, 5, 5).addYears(2) // => "Wed Jun 05 2024 00:00:00 GMT+0300 (GMT+03:00)"
     * new Date(2022, 5, 5).addYears(-2) // => "Fri Jun 05 2020 00:00:00 GMT+0300 (GMT+03:00)"
     * ```
     */
    addYears(years: number): Date;
  }
}

Date.prototype.addDays = function (days: number): Date {
  this.setDate(this.getDate() + days);

  return this;
};
Date.prototype.addWeeks = function (weeks: number): Date {
  this.setDate(this.getDate() + weeks * 7);

  return this;
};
Date.prototype.addMonths = function (months: number): Date {
  this.setMonth(this.getMonth() + months);

  return this;
};
Date.prototype.addYears = function (years: number): Date {
  this.setFullYear(this.getFullYear() + years);

  return this;
};

export {};
