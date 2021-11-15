var assert = require("assert");
const { expect } = require("chai");
const index = require("../index");
let testNumber = 1 ;


//First Part

describe("capitalizeText", function () {
  //test that the function takes a string  it will return a string
  it("Should return a string value ", function () {
    expect(index.capitalizeText("Roro")).to.be.a("string");
  });

  //test that the function takes a string and return it after capitalize it
  it("test that function takes a string and return it after capitalizing it", function () {
    assert.equal(index.capitalizeText("roro"), "roro".toUpperCase());
  });

  //test if the function takes number it will throw type error says parameter should be string
  context('with number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        index.capitalizeText(5)
      }).to.throw(TypeError, 'parameter should be string')

    })
   
  })
  
  //test if the input iti , the returned value  will not equal to hello
  it("if the input iti , the returned value  will not equal to hello", function () {
    assert.notEqual(index.capitalizeText("iti"), "hello");

  });
});


//Second Part

describe("createArray", function () {

    beforeEach(() => {
       setTimeout(() => console.log("it's a delayed function"),3000)
    });

    //test that the return value of type array
  
    it("Should return an array ", function () {
      expect(index.createArray(7)).to.be.a("array");

    });


    //test if we pass 3 it will return array of length 3 and test it's include 1

    it("Should return an array with length of 3 & if we pass 3 it includes 1 ", function () {
        expect(index.createArray(3)).to.be.a("array").that.includes(1).to.have.lengthOf(3);
      });

    

  });
  