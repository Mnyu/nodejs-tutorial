// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick
// https://nodejs.dev/en/learn/

console.log('first');

setTimeout(() => {
  console.log('second');
}, 0);

console.log('third');