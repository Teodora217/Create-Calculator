const { expect } = require("chai");
const { createCalculator } = require("./createCalculator");

describe("Summator", () => {
  let instance = null;
  beforeEach(() => {
    instance = createCalculator();
  });
  it("has all methods", () => {
    expect(instance).to.has.ownProperty("add");
    expect(instance).to.has.ownProperty("subtract");
    expect(instance).to.has.ownProperty("get");
  });
  it("starts empty", () => {
    expect(instance.get()).to.equal(0);
  });
  it("adds single number", () => {
    instance.add(1);
    expect(instance.get()).to.equal(1);
  });
  it("adds multiple number", () => {
    instance.add(1);
    instance.add(2);
    expect(instance.get()).to.equal(3);
  });
  it("subtracts single number", () => {
    instance.subtract(1);
    expect(instance.get()).to.equal(-1);
  });
  it("subtracts multiple numbers", () => {
    instance.subtract(1);
    instance.subtract(2);
    expect(instance.get()).to.equal(-3);
  });
  it("add and subtracts", () => {
    instance.add(1);
    instance.subtract(2);
    expect(instance.get()).to.equal(-1);
  });
  it("works with numbers as strings", () => {
    instance.add("1");
    instance.add("2");
    instance.subtract("4");
    expect(instance.get()).to.equal(-1);
  });
});
