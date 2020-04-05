const rollDice = (() => {
  const rollSingleDie = (max) => Math.floor(Math.random()*max + 1);
  const regex = /(?:(\d+)?d(\d+)(?:\s*\+\s*(\d+))?|(\d+))(?:\s|\+|$)/gi;
    
  const parseString = (inputString) => [...inputString.matchAll(regex)]
    .map(([__, count, sides, fixed, fixedAlone]) => ({
      fixed: parseFloat(fixed || fixedAlone || '0'),
      dieCount: parseFloat(count || (!!sides ? '1' : '0')),
      dieSides: parseFloat(sides || '0'),
    }));

  const rollDice = (dice) => dice
    .map(die => ({
      fixed: die.fixed,
      die: `d${die.dieSides}`,
      rolls: Array(die.dieCount)
        .fill(0)
        .map(() => rollSingleDie(die.dieSides)),
    }));
    
  const calculateResult = (rolls) => rolls
    .map(r => r.fixed + r.rolls.reduce((s, v) => s + v, 0))
    .reduce((s, v) => s + v, 0);

  const roll = (inputString) => {
    const dice = parseString(inputString);
    const rolls = rollDice(dice);
    const result = calculateResult(rolls);
    
    return ({
      sum: result,
      values: rolls.flatMap(r => {
        if (r.fixed) {
          return [...r.rolls, r.fixed];
        }
        return r.rolls;
      }),
      dice: rolls,
    });
  }

  return roll;
})();

try {
  module.exports = rollDice;
} catch {}
try {
  window.rollDice = rollDice;
} catch {}