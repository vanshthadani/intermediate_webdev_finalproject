describe("Interest Calculator", function () {
  it("calculates simple interest correctly", function () {
    const interest = (1000 * 5 * 2) / 100;
    expect(interest).toBe(100);
  });
});
