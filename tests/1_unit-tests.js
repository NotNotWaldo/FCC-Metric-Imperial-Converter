const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function() {
  test("Must read the number", () => {
    assert.equal(convertHandler.getNum("32kg"), "32");
  });
  test("Should correctly read a decimal number input", () => {
    assert.equal(convertHandler.getNum("32.9"), 32.9);
  });
  test("Should correctly read a fractional input.", () => {
    assert.equal(convertHandler.getNum("23/4"), 5.75);
  });
  test("Should correctly read a fractional input with a decimal", () => {
    assert.equal(convertHandler.getNum("23.5/21"), 1.11905);

  });
  test('1.2/3.2 === 0.375', () => {
    assert.equal(convertHandler.getNum("1.2/3.2"), 0.375);
  });

  test("Should correctly return an error on a double-fraction (i.e. 3/2/3)", () => {
    // assert.throw(() => convertHandler.getNum("2/4/5"), Error, "Multiple fractions"); --- so the operation wont stop even if its invalid
    assert.equal(convertHandler.getNum("2/4/5"), undefined)
  });
  test('Should correctly default to a numerical input of 1 when no numerical input is provided', () => {
    assert.equal(convertHandler.getNum(''), 1)
  });
  test('Should correctly read each valid input unit', () => {
    assert.equal(convertHandler.getUnit('23kg'), 'kg')


  });
  test('23gal === gal', () => {
    assert.equal(convertHandler.getUnit('23gal'), 'gal')
  });
  test('3mi === mi', () => {
    assert.equal(convertHandler.getUnit('3mi'), 'mi')
  });

  test('Should correctly return an error for an invalid input unit', () => {
    // assert.throw(() => convertHandler.getUnit('kld'), Error, 'Invalid Unit') --- same here
    assert.equal(convertHandler.getUnit('kld'), undefined)
  });
  test('Should return the correct return unit for each valid input unit', () => {
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs')
    assert.equal(convertHandler.getReturnUnit('lbs'), 'kg')
    assert.equal(convertHandler.getReturnUnit("L"), "gal");
    assert.equal(convertHandler.getReturnUnit("gal"), "L");


  });
  test('mi to km', () => {
    assert.equal(convertHandler.getReturnUnit("mi"), "km");
  });
  test('km to mi', () => {
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
  });
  test("Should correctly return the spelled-out string unit for each valid input unit", () => {
    assert.equal(convertHandler.spellOutUnit("kg"), "kilogram");

  });
  test('lbs to pounds', () => {
    assert.equal(convertHandler.spellOutUnit("lbs"), "pound");
  });
  test('km to kilometer', () => {
    assert.equal(convertHandler.spellOutUnit("km"), "kilometer");
  });
});
