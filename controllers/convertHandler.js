function ConvertHandler() {
  this.getNum = function(input) {
    let numReg = /[\d\/\.]+/gi;

    let num = input.match(numReg);

    if (!num || num.length === 0) {
      console.log("this ran3");
      num = "1";
    } else {
      num = num[0];
    }
    let reg = /\d+[\.]{2,}/
    console.log(num);

    if (num.match(/\//g)) {
      console.log(num.match(/\//g));
      if (num.match(/\//g).length > 1) {
        console.log("this ran 2");
        return undefined
        throw new Error("Invalid number");
      } else {
        console.log("this ran");
        let nums = num.match(/[\d\.]+/gi);
        console.log(nums);

        if (nums.some(number => {
          return reg.test(number)
        })) {
          return undefined
          throw new Error("Invalid number");
        }
        num = nums[0] / nums[1];
      }
    }
    if (reg.test(num)) {
      return undefined
    }
    let result = parseFloat(parseFloat(num).toFixed(5));
    console.log(result);

    return result;
  };

  this.getUnit = function(input) {
    let unitReg = /[a-z]+/gi;
    let converts = ["gal", "L", "mi", "km", "lbs", "kg"];

    let unit = input.match(unitReg);
    let chk = converts.findIndex((conUnit) => {
      let reg = new RegExp(`^${unit}$`, "i");
      return reg.test(conUnit);
    });
    if (chk == -1) {
      return undefined
      throw new Error("Invalid Unit");
    }

    let result = converts[chk];
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    console.log("this ran 4");
    let converts = [
      ["gal", "L"],
      ["mi", "km"],
      ["lbs", "kg"],
    ];
    let leReg = new RegExp(`^${initUnit}$`, "i");

    for (let i = 0; i < converts.length; i++) {
      let index = converts[i].findIndex((unit) => leReg.test(unit));
      if (index === 0) {
        return converts[i][1];
      } else if (index === 1) {
        return converts[i][0];
      }
    }
    let result;

    return result;
  };

  this.spellOutUnit = function(unit) {
    console.log(`Unit: ${unit}`)
    // let converts = [
    //   ["gal", "L"],
    //   ["mi", "km"],
    //   ["lbs", "kg"],
    // ];
    let units = ["gal", "L", "mi", "km", "lbs", "kg"];
    let spellOut = [
      "gallon",
      "liter",
      "mile",
      "kilometer",
      "pound",
      "kilogram",
    ];

    // console.log(this.getUnit('323kg'))

    let result = units.findIndex((conUnit) => {
      let reg = new RegExp(`^${unit}$`, "i");
      return reg.test(conUnit);
    });
    console.log(`result: ${result}`)

    return spellOut[result];
  };

  this.convert = function(initNum, initUnit) {
    // const galToL = 3.78541;
    // const lbsToKg = 0.453592;
    // const miToKm = 1.60934;

    let converts = [
      ["gal", "L", 3.78541],
      ["mi", "km", 1.60934],
      ["lbs", "kg", 0.453592],
    ];

    let leReg = new RegExp(`^${initUnit}$`, "i");

    for (let i = 0; i < converts.length; i++) {
      let index = converts[i].findIndex((unit) => leReg.test(unit));
      if (index === 0) {
        let rNum = initNum * converts[i][2];
        console.log(`${rNum}${converts[i][1]}`);
        return rNum;
      } else if (index === 1) {
        let rNum = initNum / converts[i][2];
        console.log(`${rNum} ${converts[i][0]}`);
        return rNum;
      }
    }
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {

    if (initNum > 1) {
      initUnit += "s";
    }
    if (returnNum > 1) {
      returnUnit += "s";
    }

    // console.log(typeof initNum) 
    // console.log(typeof returnNum) 

    initNum = parseFloat(initNum.toFixed(5))
    returnNum = parseFloat(returnNum.toFixed(5))

    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;

    return result;
  };
}

module.exports = ConvertHandler;
