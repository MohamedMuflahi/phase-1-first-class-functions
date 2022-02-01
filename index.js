// function receivesAFunction(call){
//     call();
// }
const receivesAFunction = call => call();
const returnsANamedFunction = () => receivesAFunction;
const returnsAnAnonymousFunction = () => () => console.log('foo');