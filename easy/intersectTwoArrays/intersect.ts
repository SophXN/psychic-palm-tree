// npx ts-node intersect.ts
// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.


function intersect(nums1: number[], nums2: number[]): number[] {
    // let result: number[] = []

    // // if arrays vary in size then we only need to loop through the second one    
    // let longerArray = nums1.length >= nums2.length ? nums1 : nums2
    // let shorterArray = nums1.length >= nums2.length ? nums2 : nums1
    // // console.log(longerArray, shorterArray)

    // // helper func to check how many (if any) matches there are
    // function compareArray(a: number[]): number[] {
    //     let currentMatches: number[] = []

    //     for (let i = 0; i < shorterArray.length; i++) {
    //         if (currentMatches[a[i]]) continue
    //         if (shorterArray.indexOf(a[i]) !== -1) {
    //             currentMatches.push(a[i])
    //         }
    //     }
    //     return currentMatches
    // }

    // // iterate over the longer array
    // for (let i = 0; i < longerArray.length; i++) {
    //     // check if the shorter array contains matches
    //     let tempSlice = longerArray.slice(i)
    //     let matchesFound = compareArray(tempSlice)
    //     if (matchesFound.length > result.length) result = matchesFound
    // }

    // return result
    let res: number[] = [];
    for (var i = 0; i < nums2.length; i++) {
        if (nums1.includes(nums2[i])) {
            res.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]), 1);
        }
    }
    return res;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
console.log(intersect([9, 5], [9, 4, 9, 8, 4, 9, 5]))
console.log(intersect([9, 5], [9, 5]))
console.log(intersect([1, 2], [1, 1]))
console.log(intersect([1, 2], [2, 1]))