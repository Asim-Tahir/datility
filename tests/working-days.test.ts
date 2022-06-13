import "@/working-days";

const monday = new Date(2022, 5, 6);
const tuesday = new Date(2022, 5, 7);
const wednesday = new Date(2022, 5, 8);
const thursday = new Date(2022, 5, 9);
const friday = new Date(2022, 5, 10);
const saturday = new Date(2022, 5, 11);
const sunday = new Date(2022, 5, 12);

function getDayName(date: Date) {
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

interface TestCase {
  day: string;
  date: Date;
}

describe("isWorkingDay()", () => {
  test.each<TestCase>([
    {
      day: getDayName(monday),
      date: monday,
    },
    {
      day: getDayName(tuesday),
      date: tuesday,
    },
    {
      day: getDayName(wednesday),
      date: wednesday,
    },
    {
      day: getDayName(thursday),
      date: thursday,
    },
    {
      day: getDayName(friday),
      date: friday,
    },
  ])("should returns true when $day is working day", ({ date }) => {
    expect(date.isWorkingDay()).toBeTruthy();
  });

  test.each<TestCase>([
    {
      day: getDayName(saturday),
      date: saturday,
    },
    {
      day: getDayName(sunday),
      date: sunday,
    },
  ])("should returns false when $day is not working day", ({ date }) => {
    expect(date.isWorkingDay()).toBeFalsy();
  });
});

describe("isWeekend()", () => {
  test.each<TestCase>([
    {
      day: getDayName(saturday),
      date: saturday,
    },
    {
      day: getDayName(sunday),
      date: sunday,
    },
  ])("should returns true when $day is weekend", ({ date }) => {
    expect(date.isWeekend()).toBeTruthy();
  });

  test.each<TestCase>([
    {
      day: getDayName(monday),
      date: monday,
    },
    {
      day: getDayName(tuesday),
      date: tuesday,
    },
    {
      day: getDayName(wednesday),
      date: wednesday,
    },
    {
      day: getDayName(thursday),
      date: thursday,
    },
    {
      day: getDayName(friday),
      date: friday,
    },
  ])("should returns false when $day is not weekend", ({ date }) => {
    expect(date.isWeekend()).toBeFalsy();
  });
});

describe("addWorkingDays(day)", () => {
  test("should adds the given number of working days", () => {
    expect(new Date(2022, 5, 20)).toEqual(
      new Date(2022, 5, 6).addWorkingDays(10)
    );
  });

  test("should subtracts when the given amount is negative", () => {
    expect(new Date(2022, 5, 6)).toEqual(
      new Date(2022, 5, 20).addWorkingDays(-10)
    );
  });

  test("should returns the Monday when 1 day is added on the Friday", () => {
    expect(new Date(2022, 5, 6)).toEqual(
      new Date(2022, 5, 3).addWorkingDays(1)
    );
  });

  test("should returns the Monday when 1 day is added on the Satuday", () => {
    expect(new Date(2022, 5, 6)).toEqual(
      new Date(2022, 5, 4).addWorkingDays(1)
    );
  });

  test("should returns the Monday when 1 day is added on the Sunday", () => {
    expect(new Date(2022, 5, 6)).toEqual(
      new Date(2022, 5, 5).addWorkingDays(1)
    );
  });

  test("should adds the number of major working days given", () => {
    expect(new Date(8906, 2, 8)).toEqual(
      new Date(2022, 5, 6).addWorkingDays(1795885)
    );
  });

  test("should returns `Invalid Date` when the date is invalid", () => {
    const result = new Date(NaN).addWorkingDays(10);

    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeNaN();
  });

  test("should returns `Invalid Date` when the given amount is NaN(Not a Number)", () => {
    const result = new Date(2022, 5, 6).addWorkingDays(NaN);

    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeNaN();
  });

  test("should starting from a weekend day should land on a weekday when reducing a divisible by 5", () => {
    // Subtract result
    expect(new Date(2019, 7, 12)).toEqual(
      new Date(2019, 7, 18).addWorkingDays(-5)
    );
    // Subtract result weekend
    expect(new Date(2019, 7, 12)).toEqual(
      new Date(2019, 7, 17).addWorkingDays(-5)
    );

    // Add result
    expect(new Date(2019, 7, 23)).toEqual(
      new Date(2019, 7, 18).addWorkingDays(5)
    );
    // Add result weekend
    expect(new Date(2019, 7, 23)).toEqual(
      new Date(2019, 7, 17).addWorkingDays(5)
    );
  });
});

describe("subtractWorkingDays(day)", () => {
  test("should subtracts the given number of working days", () => {
    expect(new Date(2022, 5, 6)).toEqual(
      new Date(2022, 5, 20).subtractWorkingDays(10)
    );
  });

  test("should adds when the given amount is negative", () => {
    expect(new Date(2022, 5, 20)).toEqual(
      new Date(2022, 5, 6).subtractWorkingDays(-10)
    );
  });

  test("should subtracts the number of major working days given", () => {
    expect(new Date(2022, 5, 6)).toEqual(
      new Date(8906, 2, 8).subtractWorkingDays(1795885)
    );
  });

  test("should returns `Invalid Date` if the given date is invalid", () => {
    const result = new Date(NaN).subtractWorkingDays(10);

    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeNaN();
  });

  test("should returns `Invalid Date` if the given amount is NaN(Not a Number)", () => {
    const result = new Date(2022, 5, 6).subtractWorkingDays(NaN);

    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeNaN();
  });
});
