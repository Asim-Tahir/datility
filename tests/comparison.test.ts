import "@/comparison";
import type { DayName } from "@/comparison";

const dayBeforeYesterday = new Date();
dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const today = new Date();

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const dayAfterTomorrow = new Date();
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

describe("isBefore(given)", () => {
  test.each<Array<Date>>([[tomorrow], [dayAfterTomorrow]])(
    `should return true when the given date(%o) is early than today(${today.toISOString()})`,
    (given) => {
      expect(today.isBefore(given)).toBeTruthy();
    }
  );

  test.each<Array<Date>>([[dayBeforeYesterday], [yesterday], [today]])(
    `should return false when the given date(%o) is not early than today(${today.toISOString()})`,
    (given) => {
      expect(today.isBefore(given)).toBeFalsy();
    }
  );

  test("should return false when the given date is `Invalid Date`", () => {
    expect(today.isBefore(new Date(NaN))).toBeFalsy();
  });

  test("should return false when the target date is `Invalid Date`", () => {
    expect(new Date(NaN).isBefore(today)).toBeFalsy();
  });

  test("should return false when both dates is `Invalid Date`", () => {
    expect(new Date(NaN).isBefore(new Date(NaN))).toBeFalsy();
  });
});

describe("isSame(date)", () => {
  test.each<Array<Date>>([
    [new Date(2022, 5, 5), new Date(2022, 5, 5)],
    [new Date(2022, 0, 1), new Date(2022, 0, 1)],
  ])(
    `should return true when the target date(%o) is the same as the given date(%o))`,
    (target, given) => {
      expect(target.isSame(given)).toBeTruthy();
    }
  );

  test.each<Array<Date>>([
    [dayBeforeYesterday],
    [yesterday],
    [tomorrow],
    [dayAfterTomorrow],
  ])(
    `should return false when the given date(%o) is not the same as today(${today.toISOString()})`,
    (given) => {
      expect(today.isSame(given)).toBeFalsy();
    }
  );
});

describe("isAfter(date)", () => {
  test.each<Array<Date>>([[dayBeforeYesterday], [yesterday]])(
    `should return true when the given date(%o) is later than today(${today.toISOString()})`,
    (given) => {
      expect(today.isAfter(given)).toBeTruthy();
    }
  );
  test.each<Array<Date>>([[today], [tomorrow], [dayAfterTomorrow]])(
    `should return false when the given date(%o) is not later than today(${today.toISOString()})`,
    (given) => {
      expect(today.isAfter(given)).toBeFalsy();
    }
  );
});

describe("isSameOrBefore(date)", () => {
  test.each<Array<Date>>([[today], [tomorrow], [dayAfterTomorrow]])(
    `should return true when the given date(%o) is the same or early than today(${today.toISOString()})`,
    (given) => {
      expect(today.isSameOrBefore(given)).toBeTruthy();
    }
  );
  test.each<Array<Date>>([[dayBeforeYesterday], [yesterday]])(
    `should return false when the given date(%o) is not the same or early than today(${today.toISOString()})`,
    (given) => {
      expect(today.isSameOrBefore(given)).toBeFalsy();
    }
  );
});

describe("isSameOrAfter(date)", () => {
  test.each<Array<Date>>([[dayBeforeYesterday], [yesterday], [today]])(
    `should return true when the given date(%o) is the same or after than today(${today.toISOString()})`,
    (given) => {
      expect(today.isSameOrAfter(given)).toBeTruthy();
    }
  );

  test.each<Array<Date>>([[tomorrow], [dayAfterTomorrow]])(
    `should return false when the given date(%o) is not the same or after than today(${today.toISOString()})`,
    (given) => {
      expect(today.isSameOrAfter(given)).toBeFalsy();
    }
  );
});

describe("isBetween(start, end)", () => {
  test.each<Array<Date>>([
    [dayBeforeYesterday, today],
    [dayBeforeYesterday, tomorrow],
    [dayBeforeYesterday, dayAfterTomorrow],
    [yesterday, today],
    [yesterday, tomorrow],
    [yesterday, dayAfterTomorrow],
    [today, tomorrow],
    [today, dayAfterTomorrow],
  ])(
    `should return true when the date(${today.toISOString()}) is in between the given start(%o) and end(%o) date`,
    (start, end) => {
      expect(today.isBetween(start, end)).toBeTruthy();
    }
  );

  test.each<Array<Date>>([
    [dayBeforeYesterday, yesterday],
    [tomorrow, dayAfterTomorrow],
  ])(
    `should return false when the date(${today.toISOString()}) is not in between the given start(%o) and end(%o) date`,
    (start, end) => {
      expect(today.isBetween(start, end)).toBeFalsy();
    }
  );
});

describe("isPast(date?)", () => {
  describe("with param", () => {
    test.each<Array<Date>>([
      [dayBeforeYesterday, yesterday],
      [dayBeforeYesterday, today],
      [dayBeforeYesterday, tomorrow],
      [dayBeforeYesterday, dayAfterTomorrow],
      [yesterday, today],
      [yesterday, tomorrow],
      [yesterday, dayAfterTomorrow],
      [today, tomorrow],
      [today, dayAfterTomorrow],
    ])(
      `should return true when target date(%o) is early than the parameter date(%o)`,
      (target, param) => {
        expect(target.isPast(param)).toBeTruthy();
      }
    );

    test.each<Array<Date>>([
      [dayBeforeYesterday, dayBeforeYesterday],
      [yesterday, dayBeforeYesterday],
      [yesterday, yesterday],
      [today, dayBeforeYesterday],
      [today, yesterday],
      [today, today],
      [tomorrow, dayBeforeYesterday],
      [tomorrow, yesterday],
      [tomorrow, today],
      [tomorrow, tomorrow],
      [dayAfterTomorrow, dayBeforeYesterday],
      [dayAfterTomorrow, yesterday],
      [dayAfterTomorrow, today],
      [dayAfterTomorrow, tomorrow],
      [dayAfterTomorrow, dayAfterTomorrow],
    ])(
      `should return false when target date(%o) is later or same than the parameter date(%o)`,
      (target, param) => {
        expect(target.isPast(param)).toBeFalsy();
      }
    );
  });

  describe("without param", () => {
    test.each<Array<Date>>([[dayBeforeYesterday], [yesterday]])(
      `should return true when target date(%o) is early than today(${today.toISOString()})`,
      (target) => {
        expect(target.isPast()).toBeTruthy();
      }
    );

    test.each<Array<Date>>([[today], [tomorrow], [dayAfterTomorrow]])(
      `should return false when target date(%o) is later or same than today(${today.toISOString()})`,
      (target) => {
        expect(target.isPast()).toBeFalsy();
      }
    );
  });
});

describe("isFuture(date?)", () => {
  describe("with param", () => {
    test.each<Array<Date>>([
      [yesterday, dayBeforeYesterday],
      [today, dayBeforeYesterday],
      [today, yesterday],
      [tomorrow, dayBeforeYesterday],
      [tomorrow, yesterday],
      [tomorrow, today],
      [dayAfterTomorrow, dayBeforeYesterday],
      [dayAfterTomorrow, yesterday],
      [dayAfterTomorrow, today],
      [dayAfterTomorrow, tomorrow],
    ])(
      `should return true when target date(%o) is later than parameter date(%o)`,
      (target, param) => {
        expect(target.isFuture(param)).toBeTruthy();
      }
    );

    test.each<Array<Date>>([
      [dayBeforeYesterday, dayBeforeYesterday],
      [dayBeforeYesterday, yesterday],
      [dayBeforeYesterday, today],
      [dayBeforeYesterday, tomorrow],
      [dayBeforeYesterday, dayAfterTomorrow],
      [yesterday, yesterday],
      [yesterday, today],
      [yesterday, tomorrow],
      [yesterday, dayAfterTomorrow],
      [today, today],
      [today, tomorrow],
      [today, dayAfterTomorrow],
      [tomorrow, tomorrow],
      [tomorrow, dayAfterTomorrow],
      [dayAfterTomorrow, dayAfterTomorrow],
    ])(
      `should return false when target date(%o) is early or same than parameter date(%o)`,
      (target, param) => {
        expect(target.isFuture(param)).toBeFalsy();
      }
    );
  });

  describe("without param", () => {
    test.each<Array<Date>>([[tomorrow], [dayAfterTomorrow]])(
      `should return true when target date(%o) is later than today`,
      (target) => {
        expect(target.isFuture()).toBeTruthy();
      }
    );

    test.each<Array<Date>>([[dayBeforeYesterday], [yesterday], [today]])(
      `should return false when target date(%o) is early or same than today`,
      (target) => {
        expect(target.isFuture()).toBeFalsy();
      }
    );
  });
});

describe("isDay(dayName)", () => {
  const monday = new Date(2022, 5, 6);
  const tuesday = new Date(2022, 5, 7);
  const wednesday = new Date(2022, 5, 8);
  const thursday = new Date(2022, 5, 9);
  const friday = new Date(2022, 5, 10);
  const saturday = new Date(2022, 5, 11);
  const sunday = new Date(2022, 5, 12);

  test.each<{ date: Date; dayNames: Array<DayName> }>([
    {
      date: monday,
      dayNames: ["Monday", "monday", "Mon", "mon"],
    },
    {
      date: tuesday,
      dayNames: ["Tuesday", "tuesday", "Tue", "tue"],
    },
    {
      date: wednesday,
      dayNames: ["Wednesday", "wednesday", "Wed", "wed"],
    },
    {
      date: thursday,
      dayNames: ["Thursday", "thursday", "Thu", "thu"],
    },
    {
      date: friday,
      dayNames: ["Friday", "friday", "Fri", "fri"],
    },
    {
      date: saturday,
      dayNames: ["Saturday", "saturday", "Sat", "sat"],
    },
    {
      date: sunday,
      dayNames: ["Sunday", "sunday", "Sun", "sun"],
    },
  ])(
    "should return true when the given day names($dayNames) matches the day of the date($date)",
    ({ date, dayNames }) => {
      dayNames.map((weekDayName) => {
        expect(date.isDay(weekDayName)).toBeTruthy();
      });
    }
  );

  test.each<{ date: Date; dayNames: Array<DayName> }>([
    {
      date: monday,
      dayNames: ["Tuesday", "tuesday", "Tue", "tue"],
    },
    {
      date: tuesday,
      dayNames: ["Friday", "friday", "Fri", "fri"],
    },
    {
      date: wednesday,
      dayNames: ["Monday", "monday", "Mon", "mon"],
    },
    {
      date: thursday,
      dayNames: ["Sunday", "sunday", "Sun", "sun"],
    },
    {
      date: friday,
      dayNames: ["Thursday", "thursday", "Thu", "thu"],
    },
    {
      date: saturday,
      dayNames: ["Wednesday", "wednesday", "Wed", "wed"],
    },
    {
      date: sunday,
      dayNames: ["Saturday", "saturday", "Sat", "sat"],
    },
  ])(
    "should return false when the given day names($dayNames) not matches the day of the date($date)",
    ({ date, dayNames }) => {
      dayNames.map((dayName) => {
        expect(date.isDay(dayName)).toBeFalsy();
      });
    }
  );
});
