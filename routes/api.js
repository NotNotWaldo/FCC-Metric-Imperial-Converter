'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(async (req, res) => {
      try {
        console.log(`path: ${req.originalUrl}`)
        // console.log(req.query)
        let input = decodeURIComponent(req.query.input)
        console.log(input)
        let num = convertHandler.getNum(input)
        let unit = convertHandler.getUnit(input)
        if (num === undefined && unit === undefined) {
          console.log('this ran 6')
          return res.send('invalid number and unit')
        } else if (num === undefined) {
          return res.send('invalid number')
        } else if (unit === undefined) {
          return res.send('invalid unit')
        }
        num = parseFloat(num.toFixed(5))
        let returnUnit = convertHandler.getReturnUnit(unit)
        let returnNum = convertHandler.convert(num, unit)
        returnNum = parseFloat(returnNum.toFixed(5))
        let initSplOut = convertHandler.spellOutUnit(unit)
        console.log(initSplOut)
        let reSplOut = convertHandler.spellOutUnit(returnUnit)
        console.log(reSplOut)
        let str = convertHandler.getString(num, initSplOut, returnNum, reSplOut)
        console.log(str)
        res.json({
          initNum: num,
          initUnit: unit,
          returnNum,
          returnUnit,
          string: str
        })
      } catch (error) {
        console.log(error.message)

      }
    })

};
