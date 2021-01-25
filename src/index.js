module.exports = function toReadable (number) {
    let digit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenWithDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let res = '';  
    
    if (number === 0) return 'zero';
    if (number >= 100) {
        res += digit[Math.trunc(number / 100)] + ' hundred';
    }
   
    str = number.toString();

    if (str.charAt(str.length-2) == '1') {
        res +=' ' + tenWithDigit [number % 10] ;
    } else {
      res +=' ' + tens [str.charAt(str.length-2) || 0];
      res = res.trim() + ` ${digit[number % 10]}`;
    }
    
    return res.trim();
  
    
  }
