package main

import "fmt"

func main() {
	g := pivotIndex([]int{1, 7, 3, 6, 5, 6})
	fmt.Printf("test 1 - pivot is %v, should be 3\n", g)
	h := pivotIndex([]int{1, 2, 3})
	fmt.Printf("test 2 - pivot is %v, should be -1\n", h)
	i := pivotIndex([]int{2, 1, -1})
	fmt.Printf("test 3 - pivot is %v, should be 0\n", i)
}

func pivotIndex(nums []int) int {
	// leftIndex, rightIndex := -1, 1

	for i := 0; i < len(nums); i++ {
		var leftSum, rightSum int
		// find sum on the left
		if i-1 == -1 {
			fmt.Printf("leftSum should is %v should be 0\n", leftSum)
			leftSum = 0
		}
		for l := 0; l <= i-1; l++ {
			leftSum += nums[l]
		}
		// find sum on the right
		for r := i + 1; r < len(nums); r++ {
			if i == len(nums)-1 {
				fmt.Printf("rightSum is %v should be 0\n", rightSum)
				rightSum = 0
				break
			}
			rightSum += nums[r]
		}
		// leftIndex += 1
		// rightIndex += 1
		// compare if equal
		if leftSum == rightSum {
			fmt.Println("found the pivot!", rightSum, leftSum)
			// return index
			return i
		}
		// fmt.Printf("current leftIndex:sum %v:%v and rightIndex:sum %v:%v\n", leftIndex, leftSum, rightIndex, rightSum)
	}
	return -1
}

/*
PROMPT
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the
left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because
 there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

NOTES
I: array of int
0: int representing index of pivot
C:
E:

Compare the left sum with the right sum
- when at the left index 0, left sum is 0.
- when right index is at len(num) right sum is also 0

if the two are equal,
return index

otherwise
return -1
*/
