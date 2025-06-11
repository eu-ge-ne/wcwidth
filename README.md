# @eu-ge-ne/wcwidth

A port of [github.com/jquast/wcwidth](https://github.com/jquast/wcwidth) library
to JavaScript.

[![JSR](https://jsr.io/badges/@eu-ge-ne/wcwidth)](https://jsr.io/@eu-ge-ne/wcwidth)
[![JSR Score](https://jsr.io/badges/@eu-ge-ne/wcwidth/score)](https://jsr.io/@eu-ge-ne/wcwidth)
[![codecov](https://codecov.io/gh/eu-ge-ne/wcwidth/branch/main/graph/badge.svg?token=W0JK82OP48)](https://codecov.io/gh/eu-ge-ne/wcwidth)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=eu-ge-ne_wcwidth&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=eu-ge-ne_wcwidth)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=eu-ge-ne_wcwidth&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=eu-ge-ne_wcwidth)

- [@eu-ge-ne/wcwidth](#eu-ge-newcwidth)
  - [Installation](#installation)
    - [Deno](#deno)
    - [Node.js](#nodejs)
    - [Bun](#bun)
  - [Examples](#examples)
  - [License](#license)

## Installation

### Deno

```bash
deno add jsr:@eu-ge-ne/wcwidth
```

### Node.js

```bash
# pnpm
pnpm i jsr:@eu-ge-ne/wcwidth

# yarn
yarn add jsr:@eu-ge-ne/wcwidth

# npm
npx jsr add @eu-ge-ne/wcwidth
```

### Bun

```bash
bunx jsr add @eu-ge-ne/wcwidth
```

## Examples

```ts
import { assertEquals } from "jsr:@std/assert";
import { wcswidth } from "jsr:@eu-ge-ne/wcwidth";

assertEquals(wcswidth("コンニチハ"), 10);

assertEquals(wcswidth("🤦🏼‍♂"), 2);
```

## License

[MIT](https://choosealicense.com/licenses/mit)
