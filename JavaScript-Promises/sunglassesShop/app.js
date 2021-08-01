const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Handlers
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}
const handleFailure = (rejectedValue) => {
  console.log(rejectedValue);
}
checkInventory(order).then(handleSuccess).catch(handleFailure);

// checkInventory(order).then(handleSuccess, handleFailure); can be used as well