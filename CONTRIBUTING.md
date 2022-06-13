# Contributing to `date-utilities`

Thank you for taking your time to contribute to `date-utilities`📅. If you have a good idea for a new feature or a new method, please open [a discussion](https://github.com/Asim-Tahir/date-utilities/discussions/new?category=general) or [pull request](https://github.com/Asim-Tahir/date-utilities/compare). When facing a bug, please open [an issue](https://github.com/Asim-Tahir/date-utilities/issues/new/choose).

## Code of Conduct

Read our [code of conduct](CODE_OF_CONDUCT.md) before contributing. We believe in a community that values open-source and a welcoming environment for everyone. If you have any questions, please [contact us](mailto:AsimTahir@protonmail.com).

## New Contributor Guide

If starting from scratch, it might be helpful to take a look at these guides:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Getting Started

### Issues

#### Create a new issue

If you facing a problem, [search if an issue already exists](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests). If a related issue is doesn't exist, create a new one with [issue form](https://github.com/Asim-Tahir/date-utilities/issues/new/choose)

#### Solve an issue

Scan through [existing issues](https://github.com/Asim-Tahir/date-utilities/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See [Labels](https://github.com/Asim-Tahir/date-utilities/labels) for more information. If you find an issue to work on, you are welcome to open a PR with a fix.

### Discussions

#### Create a new discussion

If you have a good idea for a new feature or a new method, [search if an discussion already exist](https://docs.github.com/en/search-github/searching-on-github/searching-discussions). If a related discussion is doesn't exist, please open [a discussion](https://github.com/Asim-Tahir/date-utilities/discussions/new?category=general).

#### Helping others

When you are done with `date-utilities` and want to help others to face problems. You can answer an already opened discussion. If you are a discussion starter please don't forget to mark it as `answered` if is answered.

### Pull Requests

#### Create a new pull request

If you have a good idea for a new feature or method of fixing an existing problem, [search if a pull request already exists](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests). If a related pull request doesn't exist, please open [a pull request](https://github.com/Asim-Tahir/date-utilities/compare).

#### Pull Request Guidelines

##### Pull Request Title

Pull Request title should be short and descriptive. It should be clear what you are trying to achieve. Also include commit type and scope.

Example Pull Request Title:

```
feat(comparison): add `isSameHour` and `isSameMinute` methods
```

```
docs(manipulate): correction of `addMonths` method
```

##### Pull Request Description

Pull Request description should be longer and more detailed. It should describe the changes you are trying to make.

Example Pull Request Description:

```
This PR fixes #3063

Added nagative amounts support for `addMonths` and `subtractMonths` method.
When given a negative amount on `àddMethods` its will subtract the amount from the current date.
And when given a negative amount on `subtractMethods` its will add the amount to the current date.
```

##### Commit Message

We recommend that you use a commit message that is short(max 50 character for commit message, 70 character for the body, footer etc.) and descriptive. The commit message should be a single sentence, and should be clear and concise. Body of the commit message should be a detailed description of the change. We follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) guidelines. And our **scopes/categories** are:

- `manipulate`: Manipulate date methods
- `comparison`: Comparison date methods
- `working-days`: Working days related methods

Example commit messages:

###### Commit message with description and breaking change footer

```
feat(manipulate): add `addMiliseconds` and `addMinutes` methods

BREAKING CHANGE: `addSeconds` method is now deprecated. Use `addMilliseconds` instead.
```

###### Commit message with multi-paragraph body and multiple footers

```
fix(working-days): overlapping working days in chain

While `addWorkingDays` and `subtractWorkingDays' methods are chained,
the adding/subtracing days are overlapping.

This caused by the context of the chain. For example, if you add
5 working days to a date, and then subtract another 5 working days,
the date will be subtracted 5 working days more than you expected.

To avoid this problem, clean the context after each call
of the methods.

Reviewed-by: @Asim-Tahir
Refs: #127
```
