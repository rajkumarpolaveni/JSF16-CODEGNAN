 //ex:-1 setTimeout
// function sayHi() {
//     alert('Hello');
//    }
  
//   setTimeout(sayHi, 1000); 
//   //ex:-2
//   function greet(phrase, name) {
//     alert(`${phrase}, ${name}`);
//   }
  
//   setTimeout(greet, 1000, "Hello", "John"); // "Hello, John" after 1 second
  
// // ex:3 
// function Hi(a,b){
//     alert(`${a},${b}`);
// }  
// setTimeout(Hi,1000,"Hey","Mr");

//nested setTimeout
let timerId = setTimeout(function tick() {
    alert('Tick');
    timerId = setTimeout(tick, 2000); // Schedules the next call after 2 seconds
  }, 2000);
  