# map-value
Map object key/value into new object, but let you alter/delete some keys using functions

[![npm](https://img.shields.io/npm/v/map-value.svg "Version")](https://www.npmjs.com/package/map-value)
[![Build Status](https://travis-ci.org/futurist/map-value.svg?branch=master)](https://travis-ci.org/futurist/map-value)

## Install

```sh
npm install --save map-value
```

## Usage

### Simple One

```js
mapValue({a:1, b:2}, {b: v=>v*2})
// {a:1, b:4}
```

### Complex One

```js
const newObject = mapValue(
    {a:1,b:2},
    {
      a: value => ({c:3}),
      x: (value, key) => ({x:value, k:key, d: 1234})
    }
)
```

Result:

```js
{
  b: 2,
  c: 3,
  x: undefined,
  k: 'x',
  d: 1234
}
```
