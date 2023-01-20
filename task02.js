'use strict';


const allCash = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = allCash.reduce((total, item) => {
  // console.log(total, item)
  return total + item
}, 0);

console.log(Math.floor(getAverageValue / allCash.length));
