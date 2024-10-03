function outerFunction() {
    let counter = 0; // Local variable in outerFunction
  
    function innerFunction() {
      counter++; // Accessing and modifying the outerFunction variable
      return counter;
    }
  
    return innerFunction;
  }
  
  const incrementCounter = outerFunction(); // `incrementCounter` is now the innerFunction with access to `counter`
  
  console.log(incrementCounter()); // 1
  console.log(incrementCounter()); // 2
  console.log(incrementCounter()); // 3
  

  //ex-1
  function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  
  //ex-2
  function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12
  
  //ex-3
  function foo() {
    let b = 1;
    function inner() {
        return b;
    }
    return inner;
}
let get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());

//ex-5
function foo(outer_arg) {

    function inner(inner_arg) {
        return outer_arg + inner_arg;
    }
    return inner;
}
let get_func_inner1 = foo(5);

console.log(get_func_inner1(4));
console.log(get_func_inner1(3));
