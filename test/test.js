const assert = require('chai').assert;
// can't find these nodes for some reason???
const merge = require('../merge');
const mergeSort = require('../mergeSort');

it('can sort arrays with Merge Sort algorithm', function() {
    assert.deepEqual(mergeSort([1,3,5,2,9]), [1,2,3,5,9]);
});