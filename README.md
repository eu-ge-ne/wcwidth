# @eu-ge-ne/wcwidth

Port of [github.com/jquast/wcwidth](https://github.com/jquast/wcwidth) library
to JavaScript.

[![JSR](https://jsr.io/badges/@eu-ge-ne/wcwidth)](https://jsr.io/@eu-ge-ne/wcwidth)
[![JSR Score](https://jsr.io/badges/@eu-ge-ne/wcwidth/score)](https://jsr.io/@eu-ge-ne/wcwidth)
[![codecov](https://codecov.io/gh/eu-ge-ne/wcwidth/branch/main/graph/badge.svg?token=W0JK82OP48)](https://codecov.io/gh/eu-ge-ne/wcwidth)

- [Installation](#installation)
  - [Deno](#deno)
  - [Node.js](#nodejs)
  - [Bun](#bun)
- [Examples](#examples)
- [Links](#links)
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

## Links

- <https://wcwidth.readthedocs.org>

## License

[MIT](https://choosealicense.com/licenses/mit)
