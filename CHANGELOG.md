# `datility` Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2022-06-12

### Added New Methods 🎉

All methods are accessible via [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object.

```ts
import "datility";

console.log(new Date(2022, 5, 3).addDays(1)); // => Sat Jun 04 2022 00:00:00 GMT+0300 (GMT+03:00)
```

<br/>

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

<br/>

##### Manupulate category:

###### Add Manupulation Methods:

- [`addDays(days: number): Date`]()
- [`addWeeks(weeks: number): Date`]()
- [`addMonths(months: number): Date`]()
- [`addYears(years: number): Date`]()

###### Subtract Manupulation Methods:

- [`subtractDays(days: number): Date`]()
- [`subtractWeeks(weeks: number): Date`]()
- [`subtractMonths(months: number): Date`]()
- [`subtractYears(years: number): Date`]()

###### Reference Manupulation Methods:

- [`clone(): Date`]()

##### Comparison category:

- [`isBefore(given: Date): boolean`]()
- [`isSame(given: Date): boolean`]()
- [`isAfter(given: Date): boolean`]()
- [`isSameOrBefore(given: Date): boolean`]()
- [`isSameOrAfter(given: Date): boolean`]()
- [`isBetween(start: Date, end: Date): boolean`]()
- [`isPast(given?: Date): boolean`]()
- [`isFuture(given?: Date): boolean`]()
- [`isDay(dayName: DayName): boolean`]()

##### Working Days category:

- [`isWorkingDay(): boolean`]()
- [`isWeekend(): boolean`]()
- [`addWorkingDays(days: number): Date`]()
- [`subtractWorkingDays(days: number): Date`]()
