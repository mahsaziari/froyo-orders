const userInputString = prompt(
    "Please enter a list of comma-separated froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  console.log("Input Flavors: ", userInputString)

  const myFlavors = ["vanilla", "strawberry", "coffee", "chocolate", "oreo"];

  // first step - get an array based on the output of "Prompt" (userInputString)
  const inputArray = userInputString.split(',')
  // iterate over the array
  // as we iterate, we want to count
  // we will use an object to store our count
  // keys are the value of the element in the array
  
  // const froyoNumbers = {}

  // // const arrayLen = inputArray.length
  // // for (let i = 0; i < arrayLen; i++) {
  // //   // loops from index 0 to the end.
  // //   console.log('in c-style loop', i, inputArray[i])
  // //   if (froyoNumbers[inputArray[i]]) {
  // //     froyoNumbers[inputArray[i]] += 1
  // //   } else {
  // //     froyoNumbers[inputArray[i]] = 1
  // //   }
  // // }

  // for (let element of inputArray) {
  //   console.log('in for...of loop', froyoNumbers)
  //   if (froyoNumbers[element]) {
  //     froyoNumbers[element] += 1
  //   } else {
  //     froyoNumbers[element] = 1
  //   }
  // }

  // looping using methods
  // forEach <-- returns nothing
  // map <-- returns a new array (same length)
  // filter <-- returns a new array (whatever length where the return value is "true")
  // reduce <-- different (fold)

  // const froyoNumbers = inputArray.reduce((accumulator, currentValue) => {
  //   if (accumulator[currentValue]) {
  //     accumulator[currentValue] += 1
  //   } else {
  //     accumulator[currentValue] = 1
  //   }
    
  //   return accumulator
  // }, {})
  console.log("Result: ", inputArray.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
      accumulator[currentValue] += 1
    } else {
      accumulator[currentValue] = 1
    }
    
    return accumulator
  }, {}))