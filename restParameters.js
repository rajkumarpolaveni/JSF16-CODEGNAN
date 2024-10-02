/*function sumAll(...args) { // args is an array of all arguments
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  console.log(sumAll(1)); // 1
  console.log(sumAll(1, 2)); // 3
  console.log(sumAll(1, 2, 3)); // 6 */

  //mix of regular and rest parameters

  /* function showName(firstName, lastName, ...titles) {
    alert(firstName + ' ' + lastName); // "Julius Caesar"
    alert(titles[0]); // "Consul"
    alert(titles.length); // 2
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator");*/
  
  //ex-1
  function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six");
  
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, ["three", "four", "five", "six"]

  //ex-2
  function sortRestArgs(...theArgs) {
    const sortedArgs = theArgs.sort();
    return sortedArgs;
  }
  
  console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

  //ex-3
  function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => multiplier * element);
  }
  
  const arr = multiply(2, 15, 25, 42);
  console.log(arr); // [30, 50, 84]
  
  