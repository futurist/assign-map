# assign-map
Like Object.assign, but let you alter/delete some keys using functions

[![npm](https://img.shields.io/npm/v/assign-map.svg "Version")](https://www.npmjs.com/package/assign-map)
[![Build Status](https://travis-ci.org/futurist/assign-map.svg?branch=master)](https://travis-ci.org/futurist/assign-map)

## Install

```sh
npm install --save assign-map
```

## Usage

### Simple One

```js
assignMap({a:1, b:2}, {b: v=>v*2})
// {a:1, b:4}
```

### Complex One

```js
import assignMap from 'assign-map'

const newObject = assignMap(
    {a:1,b:2},
    {
      a: value => ({c:3}),
      x: (value, key) => ({x:value, k:key, d: 1234})
    }
)
```

Result:

```js
const expect = {
  b: 2,
  c: 3,
  x: undefined,
  k: 'x',
  d: 1234
}
t.deepEqual(newObject, expect)
```
