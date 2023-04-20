function compararArray(arrayOne, arrayTwo) {
    let enComun = [];
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayTwo.includes(arrayOne[i]) && !enComun.includes(arrayOne[i])) {
        enComun.push(arrayOne[i]);
      }
    }
    return enComun;
  }
  
  let arrayOne = [1,2,3,4,5,6,7,8,9,10];
  let arrayTwo = [2,4,6,8,10];
  let enComun = compararArray(arrayOne, arrayTwo);
  
  console.log(enComun);
  