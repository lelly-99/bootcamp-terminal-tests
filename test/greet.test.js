import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function() {
  it('should greet Andrew correctly', function() {
    assert.equal('Hello, Andrew', greet('Andrew'));
  });

  it('should greet Karen correctly', function() {
    assert.equal('Hello, Karen', greet('Karen'));
  });

  it('should greet Lee correctly', function() {
    assert.equal('Hello, Lee', greet('Lee'));
  });

  it('should greet Lethabo correctly', function() {
    assert.equal('Hello, Lethabo', greet('Lethabo'));
  });
});
