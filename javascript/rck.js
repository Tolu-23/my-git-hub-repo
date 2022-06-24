const quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here
const quty = quote.toLowerCase();
const der = quty.slice(0,1)
const capitalized = quty.replace(der, der.toUpperCase());
fixedQuote = capitalized; 
console.log(fixedQuote);