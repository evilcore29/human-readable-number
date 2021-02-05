module.exports = function toReadable (number) {
    const numberArray = number.toString().split('');
    const units = ['zero' ,'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];


    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  if(number < 20) return units[number].trim();

  if(number < 100) {
     if(numberArray[1] === '0') return dozens[numberArray[0]];
     return `${dozens[numberArray[0]]} ${units[numberArray[1]]}`
  }

  if(number >= 100) {
      const hundrenString = `${units[numberArray[0]]} hundred`;
      const numberFromString = parseInt(`${numberArray[1]}${numberArray[2]}`)

      if(number % 100 === 0) return hundrenString;
      if(numberFromString < 20) return `${hundrenString} ${units[numberFromString].trim()}` ;

      if(numberFromString >= 20) {
        if(numberArray[2] === '0') return `${hundrenString} ${dozens[numberArray[1]]}`;
        return `${hundrenString} ${dozens[numberArray[1]]} ${units[numberArray[2]]}`
      }
   }  
};


