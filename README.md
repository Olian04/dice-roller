# dice-roller

Tiny Dice Rolling POC

## Usage

Can be used in 3 different ways:

1. Visit the website: <https://olian04.github.io/dice-roller/>
2. Install it as a node js library
3. Install it as a shell command

### Install (library)

```sh
npm i @olian/dice-roller
```

```js
const rollDice = require('@olian/dice-roller');

const input = '2d4 + 2 + d6';
console.log(input);
const result = rollDice(input);
console.log(result.values.join(' + '), '=', result.sum);
```

### Install (shell command)

```sh
$ sudo npm i -g @olian/dice-roller
$ roll 2d4 + 2 + d6
2d4 + 2 + d6
3 + 4 + 2 + 2 = 11
```

## Syntax

Input string can be any combination of dice including static rolls.

Ex:

* 2d6
* 3d4 + 3
* 2d10 + 4d9 + 2
* d20
* d20 d20 d20
* d3 2d5 d10 + 6
