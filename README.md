<h1 align="center">Datility 📅</h1>
<p align="center">Missing javascript <code>Date</code> object utilities</p>

## Installation

```bash
npm i datility --save
```

```bash
yarn add datility
```

```bash
pnpm add datility
```

## Usage

All methods are accessible via [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object. With this line all methods, properties and so on added to the `Date` object.

```ts
import "datility";

console.log(new Date(2022, 5, 3).addDays(1)); // => Sat Jun 04 2022 00:00:00 GMT+0300 (GMT+03:00)
```

Also, can import methods from the specified category:

```ts
import "datility";
```

#### `manipulate` category

```ts
import "datility/manipulate";
import "datility/manipulate/add";
import "datility/manipulate/subtract";
import "datility/manipulate/reference";
```

#### `comparison` category

```ts
import "datility/comparison";
```

#### `working-days` category

```ts
import "datility/working-days";
```

## Methods

### Manipulate Category

#### Add Methods

#### <code>addDays(days: number): Date</code>

Add day(s) to the `Date`.

```ts
new Date(2022, 6, 9).addDays(3); // => Tue Jul 12 2022 00:00:00 GMT+0300 (GMT+03:00)
```

#### <code>addWorkingDays(days: number): Date</code>

Add working day(s) to the `Date`.

```ts
new Date(2022, 6, 9).addWorkingDays(3); // => Wed Jul 13 2022 00:00:00 GMT+0300 (GMT+03:00)
```

#### <code>addWeeks(months: number): Date</code>

Add week(s) to the `Date`.

```ts
new Date(2022, 6, 9).addWeeks(3); // => Sat Jul 30 2022 00:00:00 GMT+0300 (GMT+03:00)
```

#### <code>addMonths(months: number): Date</code>

Add month(s) to the `Date`.

```ts
new Date(2022, 6, 9).addMonths(3); // => Sun Oct 09 2022 00:00:00 GMT+0300 (GMT+03:00)
```

#### <code>addYears(years: number): Date</code>

Add year(s) to the `Date`.

```ts
new Date(2022, 6, 9).addYears(3); // => Wed Jul 09 2025 00:00:00 GMT+0300 (GMT+03:00)
```

<br/>

#### Subtract Methods

#### <code>subtractDays(days: number): Date</code>

Subtract day(s) from the `Date`.

```ts
new Date(2022, 6, 9).subtractDays(3); // => Wed Jul 06 2022 00:00:00 GMT+0300 (GMT+03:00)
```

#### <code>subtractWorkingDays(days: number): Date</code>

Subtract working day(s) from the `Date`.

```ts
new Date(2022, 6, 8).subtractWorkingDays(4); // => Mon Jun 27 2022 00:00:00 GMT+0300 (GMT+03:00)
```

#### <code>subtractWeeks(months: number): Date</code>

Subtract week(s) from the `Date`.

```ts
new Date(2022, 6, 9).subtractWeeks(3); // => Sat Jun 18 2022 00:00:00 GMT+0300 (GMT+03:00)
```

#### <code>subtractMonths(months: number): Date</code>

Subtract month(s) from the `Date`.

```ts
new Date(2022, 6, 9).subtractMonths(3); // => Sat Apr 09 2022 00:00:00 GMT+0300 (GMT+03:00)
```

#### <code>subtractYears(years: number): Date</code>

Subtract year(s) from the `Date`.

```ts
new Date(2022, 6, 9).subtractYears(3); // => Tue Jul 09 2019 00:00:00 GMT+0300 (GMT+03:00)
```

<br/>

#### Reference Methods

#### <code>clone(): Date</code>

Clone the `Date` by value.

```ts
const date = new Date(2022, 5, 9);
console.log(date, date.clone().addDays(10)); // => Sat Jun 09 2022 00:00:00 GMT+0300 (GMT+03:00), Sat Jun 19 2022 00:00:00 GMT+0300 (GMT+03:00)
```

<br/>

#### Comparison Category

#### <code>isBefore(given: Date): boolean</code>

Check if the `Date` is before the given `Date`.

```ts
new Date(2022, 5, 9).isBefore(new Date(2022, 5, 10)); // => true
new Date(2022, 5, 9).isBefore(new Date(2022, 5, 9)); // => false
new Date(2022, 5, 9).isBefore(new Date(2022, 5, 8)); // => false
```

#### <code>isSame(given: Date): boolean</code>

Check if the `Date` is the same as the given `Date`.

```ts
new Date(2022, 5, 9).isSame(new Date(2022, 5, 9)); // => true
new Date(2022, 5, 9).isSame(new Date(2022, 5, 10)); // => false
```

#### <code>isAfter(given: Date): boolean</code>

Check if the `Date` is after the given `Date`.

```ts
new Date(2022, 5, 9).isAfter(new Date(2022, 5, 8)); // => true
new Date(2022, 5, 9).isAfter(new Date(2022, 5, 9)); // => false
new Date(2022, 5, 9).isAfter(new Date(2022, 5, 10)); // => false
```

#### <code>isSameOrBefore(given: Date): boolean</code>

Check if the `Date` is the same or before the given `Date`.

```ts
new Date(2022, 5, 9).isSameOrBefore(new Date(2022, 5, 10)); // => true
new Date(2022, 5, 9).isSameOrBefore(new Date(2022, 5, 10)); // => true
new Date(2022, 5, 9).isSameOrBefore(new Date(2022, 5, 8)); // => false
```

#### <code>isSameOrAfter(given: Date): boolean</code>

Check if the `Date` is the same or after the given `Date`.

```ts
new Date(2022, 5, 9).isSameOrAfter(new Date(2022, 5, 8)); // => true
new Date(2022, 5, 9).isSameOrAfter(new Date(2022, 5, 9)); // => true
new Date(2022, 5, 9).isSameOrAfter(new Date(2022, 5, 10)); // => false
```

#### <code>isBetween(start: Date, end: Date): boolean</code>

Check if the `Date` is between the given `start` and `end` `Date`.

```ts
new Date(2022, 5, 9).isBetween(new Date(2022, 5, 8), new Date(2022, 5, 10)); // => true
new Date(2022, 5, 9).isBetween(new Date(2022, 5, 8), new Date(2022, 5, 9)); // => false
new Date(2022, 5, 9).isBetween(new Date(2022, 5, 8), new Date(2022, 5, 8)); // => false
```

#### <code>isPast(given: Date): boolean</code>

Check if the `Date` is past the given `Date`.

```ts
new Date(2022, 5, 9).isPast(new Date(2022, 5, 10)); // => false
new Date(2022, 5, 9).isPast(new Date(2022, 5, 9)); // => false
new Date(2022, 5, 9).isPast(new Date(2022, 5, 8)); // => true
```

#### <code>isFuture(given: Date): boolean</code>

Check if the `Date` is future the given `Date`.

```ts
new Date(2022, 5, 9).isFuture(new Date(2022, 5, 10)); // => true
new Date(2022, 5, 9).isFuture(new Date(2022, 5, 9)); // => false
new Date(2022, 5, 9).isFuture(new Date(2022, 5, 8)); // => false
```

#### <code>isDay(dayName: DayName): boolean</code>

Check if the `Date` is the given `dayName`.

```ts
new Date(2022, 5, 5).isDay("Sunday"); // => true
new Date(2022, 5, 6).isDay("monday"); // => true
new Date(2022, 5, 7).isDay("Tue"); // => true
new Date(2022, 5, 8).isDay("wed"); // => true
new Date(2022, 5, 9).isDay("Saturday"); // => false
```

<br/>

#### Working Days Category

#### <code>isWorkingDay(): boolean</code>

Check if the `Date` is a working day.

```ts
new Date(2022, 5, 5).isWorkingDay(); // => false
new Date(2022, 5, 6).isWorkingDay(); // => false
new Date(2022, 5, 8).isWorkingDay(); // => true
```

#### <code>isWeekend(): boolean</code>

Check if the `Date` is a weekend day.

```ts
new Date(2022, 5, 5).isWeekend(); // => true
new Date(2022, 5, 6).isWeekend(); // => true
new Date(2022, 5, 8).isWeekend(); // => false
```

#### <code>addWorkingDays(days: number): Date</code>

Add `days` working days to the `Date`.

```ts
new Date(2022, 5, 3).addWorkingDays(1); // => Sat Jun 06 2022 00:00:00 GMT+0300 (GMT+03:00)
new Date(2022, 5, 3).addWorkingDays(2); // => Sun Jun 07 2022 00:00:00 GMT+0300 (GMT+03:00)
new Date(2022, 5, 3).addWorkingDays(3); // => Mon Jun 08 2022 00:00:00 GMT+0300 (GMT+03:00)
```

#### <code>subtractWorkingDays(days: number): Date</code>

Subtract `days` working days to the `Date`.

```ts
new Date(2022, 5, 6).subtractWorkingDays(1); // => Fri Jun 03 2022 00:00:00 GMT+0300 (GMT+03:00)
new Date(2022, 5, 6).subtractWorkingDays(2); // => Thu Jun 02 2022 00:00:00 GMT+0300 (GMT+03:00)
new Date(2022, 5, 6).subtractWorkingDays(3); // => Wed Jun 01 2022 00:00:00 GMT+0300 (GMT+03:00)
```

## License

[MIT License](LICENSE)
