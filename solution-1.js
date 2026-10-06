//Solution Assignment 1
console.log("FSD Assignment 1 - synchronous method se");
Promise.resolve().then(()=>{
console.log("Assignment-1 upload kr dia");
});
setTimeout(()=>{
console.log("Solution pushed through github");
}, 3000);
setImmediate(()=>{
console.log("text will come after 3 sec");
}, 3000);
//Expected output:
//FSD Assignment 1 - synchronous method se
//Assignment-1 upload kr dia
//Solution pushed through github
//text will come after 3 sec
