'use strict';

const averageage = require('../../utils/averageage');
const chai = require('chai');
var expect = chai.expect;
const assert = chai.assert;
var testData = require('../../sample-data/test-data.json');
//const testUtils = require('./test-utils');
const fixtures = require('./test-fixtures.json');

describe('Average-Age tests', function () {

  const sampleWeek = fixtures.sampleWeek;

  const start = fixtures.startDate;
  const end = fixtures.endDate;

  const sprintName = fixtures.sprintName;
  const sprintStart = fixtures.sprintStart;
  const sprintEnd = fixtures.sprintEnd;

  beforeEach(function () {
    //
  });

  afterEach(function () {
    //
  });

  it('should return error object if no jiraData passed in', function () {
    var aa = averageage.averageAge(testData, start, end);
  });

  it('should return error object if no start date passed in', function () {
    var aa = averageage.averageAge(testData, start, end);
    // TODO
  });

  it('should return error object if no end date passed in', function () {
    // TODO
  });

  it('should handle a date that is passed in as a string', function () {
    // TODO
  });

  it('should handle a date that is passed in as a Date object', function () {
    // TODO
  });

  it('should return an object with a number of key-value pairs equal to the date range', function () {
    // TODO
  });

  it('should return an object with a key for each date in the range', function () {
    // TODO
  });

  it('should return an object that contains no null or undefined values', function () {
    // TODO
  });

});
