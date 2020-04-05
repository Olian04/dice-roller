#!/usr/bin/env node
const rollDice = require('@olian/dice-roller');

const [__1, __2, ...args] = process.argv;
const processInput = args.join(' ');
const input = processInput || 'd20';

console.log(input);
const result = rollDice(input);
console.log(result.values.join(' + '), '=', result.sum);
