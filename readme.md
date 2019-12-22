# neo-regex [![Build Status](https://travis-ci.org/k4m4/neo-regex.svg?branch=master)](https://travis-ci.org/k4m4/neo-regex) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

> Regular expression for matching NEO addresses


## Install

```
~ ❯❯❯ npm install neo-regex
```


## Usage

```js
const neoRegex = require('neo-regex');

neoRegex().test('nodejsrocks AQVh2pG732YvtNaxEGkQUei3YA4cvo7d2i');
//=> true

neoRegex({exact: true}).test('nodejsrocks AQVh2pG732YvtNaxEGkQUei3YA4cvo7d2i foo');
//=> false

neoRegex({exact: true}).test('AQVh2pG732YvtNaxEGkQUei3YA4cvo7d2i');
//=> true

'nodejsrocks AQVh2pG732YvtNaxEGkQUei3YA4cvo7d2i unicorn AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT rainbow'.match(neoRegex());
//=> ['AQVh2pG732YvtNaxEGkQUei3YA4cvo7d2i', 'AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT']
```


## API

### neoRegex([options])

Returns a regex for matching NEO addresses.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any NEO address in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is an NEO address.


## Related

- [ethereum-regex](https://github.com/k4m4/ethereum-regex) - Regular expression for matching Ethereum (ETH) addresses.
- [litecoin-regex](https://github.com/k4m4/litecoin-regex) - Regular expression for matching Litecoin (LTC) addresses.
- [bitcoincash-regex](https://github.com/k4m4/bitcoincash-regex) - Regular expression for matching Bitcoin Cash (BCH) addresses.
- [monero-regex](https://github.com/k4m4/monero-regex) - Regular expression for matching Monero (XMR) addresses.
- [dash-regex](https://github.com/k4m4/dash-regex) - Regular expression for matching Dash addresses.
- [ripple-regex](https://github.com/k4m4/ripple-regex) - Regular expression for matching Ripple (XRP) addresses.
- [dogecoin-regex](https://github.com/k4m4/dogecoin-regex) - Regular expression for matching Dogecoin (DOGE) addresses.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)