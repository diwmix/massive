let ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let teens = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifthteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let hundreds = [
    "",
    "one hundred",
    "two hundred",
    "three hundred",
    "four hundred",
    "five hundred",
    "six hundred",
    "seven hundred",
    "eight hundred",
    "nive hundred",
  ];
  let thousands = [
    "",
    "one thousands",
    "two thousands",
    "three thousands",
    "four thousands",
    "five thousands",
    "six thousands",
    "seven thousands",
    "eight thousands",
    "nive thousands",
  ];
  
  function transformThousands(num) {
    if (num >= 1000)
      return (
        thousands[Math.floor(num / 1000)] + " " + transformThousands(num % 1000)
      );
    else return transformHundreds(num);
  }
  
  function transformHundreds(num) {
    if (num >= 100)
      return hundreds[Math.floor(num / 100)] + " " + transformTens(num % 100);
    else return transformTens(num);
  }
  
  function transformTens(num) {
    if (num >= 11 && num <= 19) return teens[num - 10];
    else if (num >= 10) return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    else if (num < 10) return ones[num % 10];
  }
  
  function transform(num) {
    if (num > 9999 || num < -9999)
      return "Number outside the scope of definitions";
    else {
      if (num == 0 || num == -0) return "zero";
      else if (num < 0) {
        num = -num;
        return "minus" + " " + transformThousands(num);
      } else return transformThousands(num);
    }
  }
  
  let arrNumber = [0, -16, -4, 11, 62, -36, 29, 84, -52];
  for (let i = 0; i < arrNumber.length; i++)
    console.log(arrNumber[i] + " -- " + transform(arrNumber[i]));