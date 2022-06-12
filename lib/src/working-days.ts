declare global {
  interface Date {
    /**
     * @name isWorkingDay
     * @category Working Days
     * @summary Returns true if the date is a working day.
     *
     * @description
     * Returns true if the date is a working day.
     *
     * @returns {boolean}
     *
     * @example
     * ```ts
     * new Date(2022, 5, 6).isWorkingDay() // true, Monday
     * new Date(2022, 5, 10).isWorkingDay() // true, Friday
     * new Date(2022, 5, 11).isWorkingDay() // false, Saturday
     * new Date(2022, 5, 12).isWorkingDay() // false, Sunday
     * ```
     */
    isWorkingDay(): boolean;

    /**
     * @name isWeekend
     * @category Working Days
     * @summary Returns true if the date is weekend.
     *
     * @description
     * Returns true if the date is weekend.
     *
     * @returns {boolean}
     *
     * @example
     * ```ts
     * new Date(2022, 5, 6).isWeekend() // false, Monday
     * new Date(2022, 5, 10).isWeekend() // false, Friday
     * new Date(2022, 5, 11).isWeekend() // true, Saturday
     * new Date(2022, 5, 12).isWeekend() // true, Sunday
     * ```
     */
    isWeekend(): boolean;

    /**
     * @name addWorkingDays
     * @category Working Days
     * @summary Add the specified number of business days (mon - fri) to the date.
     *
     * @description
     * Add the specified number of business days (mon - fri) to the date, ignoring weekends.
     *
     * @param {number} days - the value of business days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
     * @returns {Date} the new date with the business days added.
     *
     * @example
     * ```ts
     * new Date(2022, 5, 6).addWorkingDays(10) // => "Mon Jun 20 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * new Date(2022, 5, 20).addWorkingDays(-10) // => "Mon Jun 06 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * ```
     */
    addWorkingDays(days: number): Date;

    /**
     * @name subtractWorkingDays
     * @category Working Days
     * @summary Subtract the specified number of business days (mon - fri) from the date.
     *
     * @description
     * Subtract the specified number of business days (mon - fri) from the date, ignoring weekends.
     *
     * @param {number} days - the amount of business days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
     * @returns {Date} the new date with the business days subtracted.
     *
     * @example
     * ```ts
     * new Date(2022, 5, 6).subtractWorkingDays(10) // => "Mon May 23 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * new Date(2022, 5, 6).subtractWorkingDays(-10) // => "Mon Jun 20 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * ```
     */
    subtractWorkingDays(days: number): Date;
  }
}

Date.prototype.isWorkingDay = function (): boolean {
  if (
    this.toLocaleDateString("en-US", { weekday: "long" }) === "Saturday" ||
    this.toLocaleDateString("en-US", { weekday: "long" }) === "Sunday"
  ) {
    return false;
  }

  return true;
};

Date.prototype.isWeekend = function (): boolean {
  if (
    this.toLocaleDateString("en-US", { weekday: "long" }) === "Saturday" ||
    this.toLocaleDateString("en-US", { weekday: "long" }) === "Sunday"
  ) {
    return true;
  }

  return false;
};

Date.prototype.addWorkingDays = function (days: number): Date {
  const startedOnWeekend = this.isWeekend();

  if (isNaN(days)) return new Date(NaN);

  const hours = this.getHours();
  const sign = days < 0 ? -1 : 1;
  const fullWeeks = Math.floor(days / 5);

  this.setDate(this.getDate() + fullWeeks * 7);

  // Get remaining days not part of a full week
  let restDays = Math.abs(days % 5);

  // Loops over remaining days
  while (restDays > 0) {
    this.setDate(this.getDate() + sign);
    if (this.isWorkingDay()) restDays -= 1;
  }

  // If the date is a weekend day and we reduce a dividable of
  // 5 from it, we land on a weekend date.
  // To counter this, we add days accordingly to land on the next business day
  if (startedOnWeekend && this.isWeekend() && days !== 0) {
    // If we're reducing days, we want to add days until we land on a weekday
    // If we're adding days we want to reduce days until we land on a weekday

    if (this.toLocaleDateString("en-US", { weekday: "long" }) === "Saturday") {
      this.setDate(this.getDate() + (sign < 0 ? 2 : -1));
    }
    if (this.toLocaleDateString("en-US", { weekday: "long" }) === "Sunday") {
      this.setDate(this.getDate() + (sign < 0 ? 1 : -2));
    }
  }

  // Restore hours to avoid DST issues
  this.setHours(hours);

  return this;
};

Date.prototype.subtractWorkingDays = function (days: number): Date {
  return this.addWorkingDays(-days);
};

export {};
