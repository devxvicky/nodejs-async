const axios = require('axios');

// const { printHello, getProduct } = require('./first');

// const product = getProduct().then((data) => {
//   //   console.log(data.data);
//   fun1(data.data);
// });

// const fun1 = (data) => {
//   let x = data;
//   x = 'hello';
//   console.log(9, x);
// };

// // printHello();

console.log('1');
console.log('2');
setTimeout(async () => {
  try {
    console.log('a');
    const product = await axios.get('http://143.198.182.218', {
      timeout: 1000 * 5,
    });
    console.log(product.data);
    console.log('c');
  } catch {
    console.log('error');
  }
}, 0);
console.log('4');
console.log('5');
