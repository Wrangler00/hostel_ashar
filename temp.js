// setTimeout(()=>{
    
//     setImmediate(()=>console.log(0));
//     setTimeout(() => console.log(1), 0);

//     Promise.resolve(1).then(()=>console.log(2)).then(()=>console.log(3))
//     .then(()=>console.log(6)).then(()=>console.log(7)).then(()=>console.log(8));
    
//     console.log(4);

//     // process.nextTick(()=>console.log(5));
// },10);

// call stack:     web apis:
             // cb3                 

// job q :
// cb3

// task q :
//  cb -1


// check q :
// cb0


// 2



// let racer1 = function() {
//     setTimeout(() => console.log("timeout"), 0);
//     setImmediate(() => console.log("immediate"));
//     process.nextTick(() => console.log("nextTick"));
//   }
  
//   let racer2 = function() {
//     process.nextTick(() => console.log("nextTick"));
//     setTimeout(() => console.log("timeout"), 0);
//     setImmediate(() => console.log("immediate"));
//   }
  
//   let racer3 = function() {
//     setImmediate(() => console.log("immediate"));
//     process.nextTick(() => console.log("nextTick"));
//     setTimeout(() => console.log("timeout"), 0);
//   }
  
//   racer1()
//   racer2()
//   racer3()

// //   nextTick
// //   nextTick
// //   nextTick
// //   timeout
// //   timeout
// //   timeout

// console.log(i);

// for(var i=0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i)
// }