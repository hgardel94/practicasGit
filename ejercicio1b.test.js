const ejercicio1b = require('./ejercicio1b');
//Tests of evenCounting 
test('add a number 14', () => {
  expect(ejercicio1b.evenCounting(14)).toStrictEqual([ 2, 4, 6, 8, 10, 12 ]);
});

test('add a number 25 ', () => {
  expect(ejercicio1b.evenCounting(25)).toStrictEqual([2,  4,  6,  8, 10,
    12, 14, 16, 18, 20,
    22, 24]);
});

test('add 100/5 equals 20 ', () => {
  expect(ejercicio1b.evenCounting(100/5)).toStrictEqual([ 2,  4,  6,  8, 10,
    12, 14, 16, 18]);
});
test('do not add nothing ', () => {
  expect(ejercicio1b.evenCounting()).toStrictEqual(false);
});

test('add a empty string "" ', () => {
  expect(ejercicio1b.evenCounting("")).toStrictEqual(false);
});

test('add lwemdlñewmd', () => {
  expect(ejercicio1b.evenCounting("lwemdlñewmd")).toBe(false);
});

/* test('do not add nothing ', () => {
  expect(evenCounting()).toStrictEqual(console.error("Error: You need to add a number"));
});
 test('add a empty string "" ', () => {
  expect(evenCounting("")).toStrictEqual(console.error("Error: This is not a number")
  );
});

test('add a number and count even numbers since one to the number ', () => {
  expect(evenCounting("lwemdlñewmd")).toBe(console.error("Error: This is not a number"));
});
*/
//Test verifyPalindrome
test('add the word reconocer that is a palindrome', () => {
  expect(ejercicio1b.verifyPalindrome("reconocer")).toStrictEqual(console.log(`The word: "reconocer" is a palindrome`));
});

test('add the word cabra that is not a palindrome ', () => {
  expect(ejercicio1b.verifyPalindrome("cabra")).toStrictEqual(console.log(`The word: "cabra" is not a palindrome`));
});

test('do not add nothing "undefined" ', () => {
  expect(ejercicio1b.verifyPalindrome()).toBe(false);
});
test('ad a empty string "" ', () => {
  expect(ejercicio1b.verifyPalindrome("")).toBe(false);
});

test('add the word oso that is a palindrome ', () => {
  expect(ejercicio1b.verifyPalindrome("oso")).toBe(console.log(`The word: "oso" is a palindrome`));
});

test('add the word sometemos that is a palindrome', () => {
  expect(ejercicio1b.verifyPalindrome("sometemos")).toBe(console.log(`The word: "sometemos" is a palindrome`));
});

//Test sumDigits
test('add the number 46', () => {
    expect(ejercicio1b.sumDigits(46)).toBe((10));
  });
  
  test('add the number 23', () => {
    expect(ejercicio1b.sumDigits(23)).toBe((5));
  });
  
  test('do not add nothing "undefined" ', () => {
    expect(ejercicio1b.sumDigits()).toBe(false);
  });
  test('add a empty string "" ', () => {
    expect(ejercicio1b.sumDigits("")).toBe(false);
  });
  test('add the string "Héctor" ', () => {
    expect(ejercicio1b.sumDigits("Héctor")).toBe(false);
  });
  test('add the number 22222', () => {
    expect(ejercicio1b.sumDigits(22222)).toBe(10);
  });
  test('add the number 123456', () => {
    expect(ejercicio1b.sumDigits(123456)).toBe(21);
  });

// Test multipyMatrix
test('add the number 5', () => {
    expect(ejercicio1b.multiplyMatrix(5)).toBe((console.log(`La multiplicacion de 5 x 0  =  0
  La multiplicacion de 5 x 1  =  5
  La multiplicacion de 5 x 2  =  10
  La multiplicacion de 5 x 3  =  15
  La multiplicacion de 5 x 4  =  20
  La multiplicacion de 5 x 5  =  25
  La multiplicacion de 5 x 6  =  30
  La multiplicacion de 5 x 7  =  35
  La multiplicacion de 5 x 8  =  40
  La multiplicacion de 5 x 9  =  45
  La multiplicacion de 5 x 10  =  50`)));
  });
  
  test('add the number 23', () => {
    expect(ejercicio1b.multiplyMatrix(23)).toBe((console.log(`La multiplicacion de 23 x 0  =  0
  La multiplicacion de 23 x 1  =  23
  La multiplicacion de 23 x 2  =  46
  La multiplicacion de 23 x 3  =  69
  La multiplicacion de 23 x 4  =  92
  La multiplicacion de 23 x 5  =  115
  La multiplicacion de 23 x 6  =  138
  La multiplicacion de 23 x 7  =  161
  La multiplicacion de 23 x 8  =  184
  La multiplicacion de 23 x 9  =  207
  La multiplicacion de 23 x 10  =  230`)));
  });
  
  test('do not add nothing "undefined" ', () => {
    expect(ejercicio1b.multiplyMatrix()).toBe(false);
  });
  test('add a empty string "" ', () => {
    expect(ejercicio1b.multiplyMatrix("")).toBe(false);
  });
  test('add the string "Héctor" ', () => {
    expect(ejercicio1b.multiplyMatrix("Héctor")).toBe(false);
  });
  test('add the number 222', () => {
    expect(ejercicio1b.multiplyMatrix(222)).toBe(console.log(`La multiplicacion de 222 x 0  =  0
  La multiplicacion de 222 x 1  =  222
  La multiplicacion de 222 x 2  =  444
  La multiplicacion de 222 x 3  =  666
  La multiplicacion de 222 x 4  =  888
  La multiplicacion de 222 x 5  =  1110
  La multiplicacion de 222 x 6  =  1332
  La multiplicacion de 222 x 7  =  1554
  La multiplicacion de 222 x 8  =  1776
  La multiplicacion de 222 x 9  =  1998
  La multiplicacion de 222 x 10  =  2220`));
  });
  test('add true', () => {
    expect(ejercicio1b.multiplyMatrix(true)).toBe(false);
  });

// Test primeNumbers
test('add the number 7 that it is prime', () => {
    expect(ejercicio1b.primeNumbers(7)).toBe((console.log(`The number "7" is prime`)));
  });
  
  test('add the number 23 that it is not prime', () => {
    expect(ejercicio1b.primeNumbers(22)).toBe((console.log(`The number "22" is not prime`)));
  });
  
  test('do not add nothing "undefined" ', () => {
    expect(ejercicio1b.primeNumbers()).toBe(false);
  });
  test('add a empty string "" ', () => {
    expect(ejercicio1b.primeNumbers("")).toBe(false);
  });
  test('add the string "Héctor" ', () => {
    expect(ejercicio1b.primeNumbers("Héctor")).toBe(false);
  });
  test('add the number 67 that it is prime', () => {
    expect(ejercicio1b.primeNumbers(67)).toBe(console.log(`The number "67" is prime`));
  });
  test('add true that it is not number', () => {
    expect(ejercicio1b.primeNumbers(true)).toBe(false);
  });