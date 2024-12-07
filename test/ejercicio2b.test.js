const ejercicio2b = require('../src/ejercicio2b');

// Test passwordMatch
test('add the string "2PxÑzuxa" that it is match', () => {
  expect(ejercicio2b.passwordMatch("2PxÑzuxa")).toBe(true);
});

test('add the string "haxj210*x2&" that it is match', () => {
  expect(ejercicio2b.passwordMatch("haxj210*x2&")).toBe(true);
});

test('add the string "newknkenopoewnonwefn3948" that not is match', () => {
  expect(ejercicio2b.passwordMatch("newknkenopoewnonwefn3948")).toBe(false);
});
test('do not add nothing "undefined" ', () => {
  expect(ejercicio2b.passwordMatch()).toBe(false);
});
test('add a empty string "" ', () => {
  expect(ejercicio2b.passwordMatch("")).toBe(false);
});
test('add the string "Héctor" ', () => {
  expect(ejercicio2b.passwordMatch("Héctor")).toBe(false);
});
test('add the number 67 that it is prime', () => {
  expect(ejercicio2b.passwordMatch(67)).toBe(false);
});
test('add true that it is not number', () => {
  expect(ejercicio2b.passwordMatch(true)).toBe(false);
});

// Test payTaxes
test('add 18 years and 700 gains, this person does not to pay taxes', () => {
    expect(ejercicio2b.payTaxes(18, 700)).toBe((console.log(`This person does not have to pay taxes because his/her
       gains are 700 euros (The minimum is 900 euros).`)));
  });
  
  test('add 18 years and 1500 gains, this person have to pay taxes', () => {
    expect(ejercicio2b.payTaxes(18, 1500)).toBe((console.log(`This person has to pay 450 euros of taxes.`)));
  });
  
  test('add 17 years old and 700 gains, this person does not to pay taxes', () => {
    expect(ejercicio2b.payTaxes(17, 700)).toBe((console.log(`This person does not have to pay taxes because he/she 
      does not compply with the requeriment minimums.`)));
  });
  
  test('do not add nothing "undefined" ', () => {
    expect(ejercicio2b.payTaxes()).toBe(false);
  });
  test('add a string "19" and 1400 gains ', () => {
    expect(ejercicio2b.payTaxes("19", 1400)).toBe(false);
  });
  test('add the string "Héctor" ', () => {
    expect(ejercicio2b.payTaxes("Héctor")).toBe(false);
  });
  
// Test showBrands
test('call the functtion showBrands', () => {
    expect(ejercicio2b.showBrands()).toBe((console.log(`nike
  adidas
  puma
  kelme
  new balance
  umbro`)));
  });

// Test mutiplipleOf

test('add the number 7 that is not divisible by 3 or 5', () => {
    expect(ejercicio2b.multipleOf(7)).toBe(7);
  });
  
  test('add the number 25 that is divisible by 5', () => {
    expect(ejercicio2b.multipleOf(25)).toBe("Buzz");
  });
  
  test('add the number 24 that is divisible by 3', () => {
    expect(ejercicio2b.multipleOf(24)).toBe("Fizz");
  });
  
  test('add the number 30 that is divisible by 30 and by 5', () => {
    expect(ejercicio2b.multipleOf(30)).toBe("FizzBuzz");
  });
  
  test('do not add nothing "undefined" ', () => {
    expect(ejercicio2b.multipleOf()).toBe(false);
  });
  test('add a string "19"', () => {
    expect(ejercicio2b.multipleOf("19")).toBe(false);
  });
  test('add the string "Héctor" ', () => {
    expect(ejercicio2b.multipleOf("Héctor")).toBe(false);
  });

// Test countCharacter

test('add the string "nenkAanlanAlañana" that has 5', () => {
    expect(ejercicio2b.countCharacter("nenkAanlanAlañana")).toBe(console.log(`This string has 5 characters 'a'`));
  });
  
  test('add the string "MSWkAjb a j lñmwlmalmoepnankfrfropnaAnasa7485a aaa67AaAAaAA" that has 12 characters a', () => {
    expect(ejercicio2b.countCharacter("MSWkAjb a j lñmwlmalmoepnankfrfropnaAnasa7485a aaa67AaAAaAA")).toBe(console.log(`This string has 12 characters 'a'`));
  });
  
  test('do not add nothing "undefined" ', () => {
    expect(ejercicio2b.countCharacter()).toBe(console.error(`Error: You need to add a string`));
  });
  
  test('add a number 345', () => {
    expect(ejercicio2b.countCharacter(345)).toBe(console.error(`Error: Yhis is not a string`));
  });
  test('add a string ""', () => {
    expect(ejercicio2b.countCharacter("")).toBe(console.error(`Error: You need to add a string`));
  });
  test('add the string "Héctor" that does not have any characters a', () => {
    expect(ejercicio2b.countCharacter("Héctor")).toBe(console.log(`This string has 0 characters 'a'`));
  });
  test('add the string "Magdalena" that has 3 characters a ', () => {
    expect(ejercicio2b.countCharacter("Magdalena")).toBe(console.log(`This string has 0 characters 'a'`));
  });
  test('add the string "nenkAanlaknksnoaaaaana" that has 8 characters a', () => {
    expect(ejercicio2b.countCharacter("nenkAanlaknksnoaaaaana")).toBe(console.log(`This string has 8 characters 'a'`));
  });
  