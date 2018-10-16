const expect = require('chai').expect;
const driver = require('../src/driver');

describe('Test functions in Driver class', () => {

    describe('Calculate Rate Function', () => {
        it("calculate 47", () => {

            let result = driver.calculateRate("05:03","06:03","47.00");
            let solution = 47;
            expect(result).to.eql(solution)
        });
        it("calculate null", () => {

            let result = driver.calculateRate("9:05","1:00","5.00");
            let solution = null;
            expect(result).to.eql(solution)
        });
        it("calculate 35", () => {

            let result = driver.calculateRate("07:15","07:45","17.3");
            let solution = 35;
            expect(result).to.eql(solution)
        });
    });

    describe('Calculate Time Difference Function', () => {
        it("calculateTimeDif 60", () => {

            let result = driver.calculateTimeDif("05:03","06:03");
            let solution = 60;
            expect(result).to.eql(solution)
        });
        it("calculateTimeDif null", () => {

            let result = driver.calculateTimeDif("08:05","06:05");
            let solution = null;
            expect(result).to.eql(solution)
        });
        it("calculateTimeDif 960", () => {

            let result = driver.calculateTimeDif("08:05","24:05");
            let solution = 960;
            expect(result).to.eql(solution)
        });
    });

    describe('Calculate Rate Function', () => {
        it("calculate rate string 560 ", () => {

            let result = driver.getRateMPH("15","140");
            let solution = 560;
            expect(result).to.eql(solution)
        });
        it("calculate rate int 560 ", () => {

            let result = driver.getRateMPH(15,140);
            let solution = 560;
            expect(result).to.eql(solution)
        });
        it("calculate rate 60", () => {

            let result = driver.getRateMPH(60,60);
            let solution = 60;
            expect(result).to.eql(solution)
        });
        it("calculate rate 84", () => {

            let result = driver.getRateMPH(88,123);
            let solution = 84;
            expect(result).to.eql(solution)
        });
    })



});