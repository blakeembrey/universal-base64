# Universal Base64

[![NPM version](https://img.shields.io/npm/v/universal-base64.svg?style=flat)](https://npmjs.org/package/universal-base64)
[![NPM downloads](https://img.shields.io/npm/dm/universal-base64.svg?style=flat)](https://npmjs.org/package/universal-base64)
[![Build status](https://img.shields.io/travis/blakeembrey/universal-base64.svg?style=flat)](https://travis-ci.org/blakeembrey/universal-base64)
[![Test coverage](https://img.shields.io/coveralls/blakeembrey/universal-base64.svg?style=flat)](https://coveralls.io/r/blakeembrey/universal-base64?branch=master)

> Small universal base64 functions for node.js and browsers.

Why? Universal projects deployed to browsers should not need `Buffer` for base64 functionality already built into browsers (`window.btoa` and `window.atob`).

## Installation

```
npm install universal-base64 --save
```

## Usage

```js
import { atob, btoa } from 'universal-base64'

btoa('test') //=> "dGVzdA=="
atob('dGVzdA==') //=> "test"
```

## TypeScript

This module uses [TypeScript](https://github.com/Microsoft/TypeScript) and contains type definitions on NPM.

## License

Apache 2.0
