function coinToss() {
   return Math.floor(Math.random() * Math.floor(2)) ==0 ? "heads" : "tails"
  }
  module.exports = coinToss;