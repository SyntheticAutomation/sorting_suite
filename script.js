// 1: a merge function which takes two sorted arrays and merges them into one sorted array
function merge(sorted_array_1, sorted_array_2) {
    var container = [];
    while (sorted_array_1.length > 0 && sorted_array_2.length > 0) {
        container.push((sorted_array_1[0] < sorted_array_2[0]) ? sorted_array_1.shift() : sorted_array_2.shift());
    }
    return container.concat( sorted_array_1.length ? sorted_array_1 : sorted_array_2);

}
// 2: a mergeSort function which splits an unsorted array into pieces so that they can be sorted.
function mergeSort (array) {
    if (array.length < 2) {
        return array;
    }
    
    var middle_index = Math.floor(array.length / 2);
    // recursive variables
    var left_split = mergeSort(array.slice(0, middle_index));
    var right_split = mergeSort(array.slice(middle_index));

    return merge(left_split, right_split);
}

module.exports = merge
module.exports = mergeSort