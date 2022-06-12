import "@/manipulate/reference";

test("should clone date by value", () => {
  const date = new Date(2022, 5, 5);
  const result = date.clone();

  expect(result).toBeInstanceOf(Date);
  expect(result).toEqual(date);
});

test("should not affect the cloned date on date manipulations", () => {
  const date = new Date(2022, 5, 5);
  const result = date.clone();

  date.setDate(date.getDate() + 1);

  expect(new Date(2022, 5, 5)).toEqual(result);
});
