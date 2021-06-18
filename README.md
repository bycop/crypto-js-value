# crypto-js-value
<a href="https://www.npmjs.com/package/crypto-js-value"><img src="https://img.shields.io/npm/dt/crypto-js-value.svg?maxAge=3600" alt="NPM downloads" /></a>
## About

Simple crypto currency module to request crypto value with crypto Symbol

## Installation

```sh-session
npm install crypto-js-value
```

## usage

```js
crypto.price("Symbol", "Currency");
```

Symbol = eth/btc/ada...
Currency = USD/USDT/EUR...

### Example
```js
const result = await crypto.price("eth", "usdt");
```
