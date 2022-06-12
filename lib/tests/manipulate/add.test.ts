import "@/manipulate/add";

test.each([[1], [30], [65]])("should add amount of day(s)(%i)", (days) => {
  const manual = new Date();
  manual.setDate(manual.getDate() + days);
  const result = new Date().addDays(days);

  expect(result).toBeInstanceOf(Date);
  expect(manual.getDate()).toBe(result.getDate());
});

test.each([[1], [4], [8]])("should add amount of week(s)(%i)", (weeks) => {
  const manual = new Date();
  manual.setDate(manual.getDate() + weeks * 7);
  const result = new Date().addWeeks(weeks);

  expect(result).toBeInstanceOf(Date);
  expect(manual.getDate()).toBe(result.getDate());
});

test.each([[1], [5], [12]])("should add amount of month(s)(%i)", (months) => {
  const manual = new Date();
  manual.setMonth(manual.getMonth() + months);
  const result = new Date().addMonths(months);

  expect(result).toBeInstanceOf(Date);
  expect(manual.getMonth()).toBe(result.getMonth());
});

test.each([[1], [5], [10]])("should add amount of year(s)(%i)", (years) => {
  const manual = new Date();
  manual.setFullYear(manual.getFullYear() + years);
  const result = new Date().addYears(years);

  expect(result).toBeInstanceOf(Date);
  expect(manual.getFullYear()).toBe(result.getFullYear());
});
