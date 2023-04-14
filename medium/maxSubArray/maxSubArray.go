package main

import (
	"fmt"
)

func main() {
	testSlice := []int{-2, 1, -3, 4, -1, 2, 1, -5, 4}
	fmt.Println(maxSubArray(testSlice))
}

/*
to find the largest sub array, we'll need to keep track of the current sum.
current number since we'll be comparing it, and the largest sum.
we can continually compare the current and largest sum to return it
*/
func maxSubArray(nums []int) int {
	// track the current, max sum, and current pointer
	currentSum := nums[0]
	maxSum := nums[0]
	pointer := 1

	// we can do a kind of while loop in go
	for pointer < len(nums) {
		// set currentSum to the max of either the currentSum or adding additional values
		currentSum = findMax(nums[pointer], currentSum+nums[pointer])
		// concurrently, we will compare the currentSum and current max to keep the larger sum
		maxSum = findMax(currentSum, maxSum)
		// move the point or else we will get stuck in an infinite while loop!
		pointer++
	}
	return maxSum

}

// since go does not provide a built in "max" func, we'll build our own!
func findMax(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}
