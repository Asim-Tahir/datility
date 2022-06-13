declare global {
  interface Date {
    /**
     * @name isBefore
     * @category Comparison
     * @summary Is the date before the given date?
     *
     * @description
     * Is the date before the given date?
     *
     * @param given - the given date
     * @returns the date is before the given date
     *
     * @example
     * ```ts
     * new Date(2022, 5, 5).isBefore(new Date(2022, 5, 11)) // => true
     * new Date(2022, 5, 11).isBefore(new Date(2022, 5, 5)) // => false
     * new Date(2022, 5, 5).isBefore(new Date(2022, 5, 5)) // => false
     * ```
     */
    isBefore(given: Date): boolean;

    /**
     * @name isSame
     * @category Comparison
     * @summary Is the date same as the given date?
     *
     * @description
     * Is the date same as the given date?
     *
     * @param given - the given date
     * @returns the date is same as the given date
     *
     * @example
     * ```ts
     * new Date(2022, 5, 5).isSame(new Date(2022, 5, 11)) // => false
     * new Date(2022, 5, 5).isSame(new Date(2022, 5, 5)) // => true
     * ```
     */
    isSame(given: Date): boolean;

    /**
     * @name isAfter
     * @category Comparison
     * @summary Is the date after the given date?
     *
     * @description
     * Is the date after the given date?
     *
     * @param given - the given date
     * @returns the date is after the given date
     *
     * @example
     * ```ts
     * new Date(2022, 5, 5).isAfter(new Date(2022, 5, 11)) // => false
     * new Date(2022, 5, 11).isAfter(new Date(2022, 5, 5)) // => true
     * new Date(2022, 5, 5).isAfter(new Date(2022, 5, 5)) // => false
     * ```
     */
    isAfter(given: Date): boolean;

    /**
     * @name isSameOrBefore
     * @category Comparison
     * @summary Is the date same or before the given date?
     *
     * @description
     * Is the date same or before the given date?
     *
     * @param given - the given date
     * @returns the date is same or before the given date
     *
     * @example
     * ```ts
     * new Date(2022, 5, 5).isSameOrBefore(new Date(2022, 5, 11)) // => true
     * new Date(2022, 5, 11).isSameOrBefore(new Date(2022, 5, 5)) // => false
     * new Date(2022, 5, 5).isSameOrBefore(new Date(2022, 5, 5)) // => true
     * ```
     */
    isSameOrBefore(given: Date): boolean;

    /**
     * @name isSameOrAfter
     * @category Comparison
     * @summary Is the date same or after the given date?
     *
     * @description
     * Is the date same or after the given date?
     *
     * @param given - the given date
     * @returns the date is same or after the given date
     *
     * @example
     * ```ts
     * new Date(2022, 5, 11).isSameOrAfter(new Date(2022, 5, 5)) // => true
     * new Date(2022, 5, 5).isSameOrAfter(new Date(2022, 5, 11)) // => false
     * new Date(2022, 5, 5).isSameOrAfter(new Date(2022, 5, 5)) // => true
     * ```
     */
    isSameOrAfter(given: Date): boolean;

    /**
     * @name isBetween
     * @category Comparison
     * @summary Is the date in between the given start and end date?
     *
     * @description
     * Is the date in between the given start and end date?
     *
     * @param start - the given start date
     * @param end - the given end date
     * @returns the date is in between the given start and end date
     *
     * @example
     * ```ts
     * new Date(2022, 5, 5).isBetween(new Date(2022, 5, 4), new Date(2022, 5, 11)) // => true
     * new Date(2022, 5, 5).isBetween(new Date(2022, 5, 6), new Date(2022, 5, 11)) // => false
     * new Date(2022, 5, 5).isBetween(new Date(2022, 5, 5), new Date(2022, 5, 11)) // => true
     * new Date(2022, 5, 5).isBetween(new Date(2022, 5, 3), new Date(2022, 5, 5)) // => true
     * ```
     */
    isBetween(start: Date, end: Date): boolean;

    /**
     * @name isPast
     * @category Comparison
     * @summary Is the date past the given date?
     *
     * @description
     * Is the date in past the given date?
     *
     * @param given - the given date
     * @returns the date is past the given date
     *
     * @example
     * ```ts
     * new Date(2022, 5, 5).isPast(new Date(2022, 5, 4)) // => false
     * new Date(2022, 5, 5).isPast(new Date(2022, 5, 6)) // => true
     * new Date(2022, 5, 5).isPast(new Date(2022, 5, 5)) // => false
     * ```
     */
    isPast(given?: Date): boolean;

    /**
     * @name isFuture
     * @category Comparison
     * @summary Is the date future the given date?
     *
     * @description
     * Is the date in future the given date?
     *
     * @param given - the given date
     * @returns the date is future the given date
     *
     * @example
     * ```ts
     * new Date(2022, 5, 5).isFuture(new Date(2022, 5, 4)) // => true
     * new Date(2022, 5, 5).isFuture(new Date(2022, 5, 6)) // => false
     * new Date(2022, 5, 5).isFuture(new Date(2022, 5, 5)) // => false
     * ```
     */
    isFuture(given?: Date): boolean;

    /**
     * @name isDay
     * @category Comparison
     * @summary Is the date future the given date?
     *
     * @description
     * Is the date in future the given date?
     *
     * @param dayName - the given day name
     * @returns the date is future the given date
     *
     * @example
     * ```ts
     * new Date(2022, 5, 5).isDay("Sunday") // => true
     * new Date(2022, 5, 6).isDay("monday") // => true
     * new Date(2022, 5, 7).isDay("Tue") // => true
     * new Date(2022, 5, 8).isDay("wed") // => true
     * new Date(2022, 5, 9).isDay("Saturday") // => false
     * ```
     */
    isDay(dayName: DayName): boolean;
  }
}

export type DayName =
  | "Monday"
  | "monday"
  | "Mon"
  | "mon"
  | "Tuesday"
  | "tuesday"
  | "Tue"
  | "tue"
  | "Wednesday"
  | "wednesday"
  | "Wed"
  | "wed"
  | "Thursday"
  | "thursday"
  | "Thu"
  | "thu"
  | "Friday"
  | "friday"
  | "Fri"
  | "fri"
  | "Saturday"
  | "saturday"
  | "Sat"
  | "sat"
  | "Sunday"
  | "sunday"
  | "Sun"
  | "sun";

Date.prototype.isBefore = function (given: Date): boolean {
  return this < given;
};

Date.prototype.isSame = function (given: Date): boolean {
  return this.getTime() === given.getTime();
};

Date.prototype.isAfter = function (given: Date): boolean {
  return this > given;
};

Date.prototype.isSameOrBefore = function (given: Date): boolean {
  return this <= given;
};

Date.prototype.isSameOrAfter = function (given: Date): boolean {
  return this >= given;
};

Date.prototype.isBetween = function (start: Date, end: Date): boolean {
  return end >= this && this >= start;
};

Date.prototype.isPast = function (given?: Date): boolean {
  if (given) {
    return this < given;
  }

  // reset now to midnight
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return this < now;
};

Date.prototype.isFuture = function (given?: Date): boolean {
  const hours = this.getHours();
  // clone target and reset to midnight
  const target = new Date(this.getTime());
  target.setHours(0, 0, 0, 0);

  if (given) {
    return target > given;
  }

  // reset now to midnight
  const now = new Date();
  now.setHours(hours);

  return target > now;
};

Date.prototype.isDay = function (dayName: DayName): boolean {
  return (
    this.toLocaleDateString("en-US", {
      weekday: "long",
    }).toLocaleLowerCase() === dayName.toLocaleLowerCase() ||
    this.toLocaleDateString("en-US", {
      weekday: "short",
    }).toLocaleLowerCase() === dayName.toLocaleLowerCase()
  );
};

export {};
