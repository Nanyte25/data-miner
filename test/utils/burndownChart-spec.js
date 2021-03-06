'use strict';

const burndownChart = require('../../utils/burndownChart');
const chai = require('chai');
var expect = chai.expect;
var testData = require('./test-jira-data.json');
const fixtures = require('./test-fixtures.json');

describe('BurndownChart test', function () {

  const sprintName = fixtures.sprintName;

  beforeEach(function () {
    //
  });

  afterEach(function () {
    //
  });

  it('should return an error object if no jiraData is passed in', function () {
    var bd = burndownChart.burndownReportData(sprintName);
    expect(bd.error).to.exist;
  });

  it('should return error object if bad jiraData passed in', function () {
    var bd = burndownChart.burndownReportData([{}], sprintName);
    expect(bd.error).to.exist;
  });

  it('should return an error object if no sprint name is passed in', function () {
    var bd = burndownChart.burndownReportData(testData);
    expect(bd.error).to.exist;
  });

  it('returned object should contain a key "sprint" with an actual value', function () {
    var bd = burndownChart.burndownReportData(testData, sprintName);
    expect(bd.sprint).to.exist;
    expect(bd.sprint).to.be.ok;
  });

  it('returned object should contain a key "report" with an actual value', function () {
    var bd = burndownChart.burndownReportData(testData, sprintName);
    expect(bd.report).to.exist;
    expect(bd.report).to.be.ok;
  });

  it('returned object should contain a key "actualBurndown" whose value is an array', function () {
    var bd = burndownChart.burndownReportData(testData, sprintName);
    expect(bd.actualBurndown).to.exist;
    expect(bd.actualBurndown instanceof Array).to.be.true;
  });

  it('"actualBurndown" array should objects of key-value pairs with keys for "date" and "points"', function () {
    var bd = burndownChart.burndownReportData(testData, sprintName);
    bd.actualBurndown.forEach(datapoint => {
      expect(datapoint.date).to.exist;
      expect(datapoint.points).to.exist;
    });
  });

  it('values for object keys in the "actualBurndown" array should not be null or undefined', function () {
    var bd = burndownChart.burndownReportData(testData, sprintName);
    bd.actualBurndown.forEach(datapoint => {
      expect(datapoint.date).to.exist;
    });
  });

  it('values for "date" keys of objects in the "actualBurndown" array should be date strings', function () {
    var bd = burndownChart.burndownReportData(testData, sprintName);
    bd.actualBurndown.forEach(datapoint => {
      expect(typeof datapoint.date == 'string' ).to.be.true;
    });
  });

  it('values for "points" keys of objects in the "actualBurndown" array should be numbers', function () {
    var bd = burndownChart.burndownReportData(testData, sprintName);
    bd.actualBurndown.forEach(datapoint => {
      expect(typeof datapoint.points == 'number' ).to.be.true;
    });
  });

  it('returned object should contain a key "expectedBurndown" whose value is an array', function () {
    var bd = burndownChart.burndownReportData(testData, sprintName);
    expect(bd.expectedBurndown).to.exist;
    expect(bd.expectedBurndown instanceof Array).to.be.true;
  });

  it('"expectedBurndown" array should objects of key-value pairs with keys for "date" and "points"', function () {
    var bd = burndownChart.burndownReportData(testData, sprintName);
    bd.expectedBurndown.forEach(datapoint => {
      expect(datapoint.date).to.exist;
      expect(datapoint.points).to.exist;
    });
  });

  it('values for object keys in the "expectedBurndown" array should not be null or undefined', function () {
    var bd = burndownChart.burndownReportData(testData, sprintName);
    bd.expectedBurndown.forEach(datapoint => {
      expect(datapoint.date).to.exist;
    });
  });

  it('values for "date" keys of objects in the "expectedBurndown" array should be date strings', function () {
    var bd = burndownChart.burndownReportData(testData, sprintName);
    bd.expectedBurndown.forEach(datapoint => {
      expect(typeof datapoint.date == 'string' ).to.be.true;
    });
  });

  it('values for "points" keys of objects in the "expectedBurndown" array should be numbers', function () {
    var bd = burndownChart.burndownReportData(testData, sprintName);
    bd.expectedBurndown.forEach(datapoint => {
      expect(typeof datapoint.points == 'number' ).to.be.true;
    });
  });

});
