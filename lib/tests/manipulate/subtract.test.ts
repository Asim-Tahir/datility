import "@/manipulate/subtract";

test.each([[1], [30], [65]])("should subtract amount of day(s)(%i)", (days) => {
  const manual = new Date();
  manual.setDate(manual.getDate() - days);
  const result = new Date().subtractDays(days);

  expect(result).toBeInstanceOf(Date);
  expect(manual.getDate()).toBe(result.getDate());
});

test.each([[1], [4], [8]])("should subtract amount of week(s)(%i)", (weeks) => {
  const manual = new Date();
  manual.setDate(manual.getDate() - weeks * 7);
  const result = new Date().subtractWeeks(weeks);

  expect(result).toBeInstanceOf(Date);
  expect(manual.getDate()).toBe(result.getDate());
});

test.each([[1], [5], [12]])("should subtract amount of month(s)(%i)", (months) => {
  const manual = new Date();
  manual.setMonth(manual.getMonth() - months);
  const result = new Date().subtractMonths(months);

  expect(result).toBeInstanceOf(Date);
  expect(manual.getMonth()).toBe(result.getMonth());
});

test.each([[1], [5], [10]])("should subtract amount of year(s)(%i)", (years) => {
  const manual = new Date();
  manual.setFullYear(manual.getFullYear() - years);
  const result = new Date().subtractYears(years);

  expect(result).toBeInstanceOf(Date);
  expect(manual.getFullYear()).toBe(result.getFullYear());
});
