const brain = require('brain.js');

const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => {
  return {
    input: item.text,
    output: item.category
  }
});

network.train(trainingData, {
  iterations: 2000
});

// const output1 = network.run('I fixed the power supply');
const output2 = network.run('The code has some bugs');

// console.log('Category: ', output1); // should be hardware
console.log('Category: ', output2); // should be software