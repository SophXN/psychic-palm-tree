// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
//  and two integers m and n, representing the number of elements in nums1 and 
//  nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be 
// stored inside the array nums1. To accommodate this, nums1 has a length of m + n, 
// where the first m elements denote the elements that should be merged, and the 
// last n elements are set to 0 and should be ignored. nums2 has a length of n.


/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
    // set the pointers to the end of each array and valid index of nums1
    let mPointer = m - 1;
    let nPointer = n - 1;

    // iterate in reverse
    for (let i = m + n - 1; i >= 0; i--) {
        // compare each num while pointers > 0
        if (mPointer >= 0 && nPointer >= 0) {
            if (nums1[mPointer] > nums2[nPointer]) {
                // replace the current spot with the larger number
                nums1[i] = nums1[mPointer]
                mPointer--
            } else {
                nums1[i] = nums2[nPointer]
                nPointer--
            }
        } else if (nPointer >= 0) {
            // If there are remaining elements in nums2
            // but nums1 is already traversed, put the remaining elements of nums2 in nums1
            nums1[i] = nums2[nPointer];
            nPointer--;
        } else {
            // If there are remaining elements in nums1
            // but nums2 is already traversed, no need to change nums1
            break;
        }
    }
    return nums1
};

console.log("Test #1 should be [1,2,2,3,5,6]: ", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log("Test #2 should be [1]: ", merge([1], 1, [], 0))
console.log("Test #3 should be [1]: ", merge([0], 0, [1], 1))

// this test is failing bc it puts the 4 at the end
console.log("Test #4 should be [1,2,3,4,5,6]: ", merge([1, 2, 4, 5, 6, 0], 5, [3], 1))
