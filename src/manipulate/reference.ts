declare global {
  interface Date {
    /**
     * @name clone
     * @category Manipulate / Reference
     * @summary Clone date by value
     *
     * @description
     * Clone date by value
     *
     * @returns cloned dateq
     *
     * @example
     * ```ts
     * const today = new Date(2022, 5, 15);
     * const yesterday = today.clone();
     * yesterday.subtractDays(1); // => "Sat Jun 14 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * today.toString() // => "Sun Jun 15 2022 00:00:00 GMT+0300 (GMT+03:00)"
     * ```
     */
    clone(): Date;
  }
}

Date.prototype.clone = function () {
  return new Date(this.getTime());
};

export {};
