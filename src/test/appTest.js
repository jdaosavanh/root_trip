const assert = require('chai').assert;
const expect = require('chai').expect;
const app = require('../app');

describe('Test output of test againts files', () => {
    it("Input \n\r      .x.\n\r      .x.\n\r      .x.", () =>{
        let result = game.runChange([[false,false,false],[true,true,true],[false,false,false]]);
        let solution = [[false,true,false],[false,true,false],[false,true,false]];
        expect(result).to.eql(solution)
    });

    it("Input \n\r      ...\n\r      xxx\n\r      ...", () =>{
        let result = game.runChange([[false,true,false],[false,true,false],[false,true,false]]);
        let solution = [[false,false,false],[true,true,true],[false,false,false]];
        expect(result).to.eql(solution)
    });


});