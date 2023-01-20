'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const prefix = 'Mr ';

const addPrefix = (names, prefix) => {
  const prefixName = names.map(i => prefix.concat(i))
  return prefixName
}

console.log(addPrefix(names, prefix))


