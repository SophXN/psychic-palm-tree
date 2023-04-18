package main

import (
	"fmt"
)

func moveZeroes(nums []int) {
	// Initialize two pointers
	slow := 0 // slow pointer to track the position of the last non-zero element
	fast := 0 // fast pointer to iterate through the array

	// Iterate through the array with the fast pointer
	for fast < len(nums) {
		// If the current element is non-zero
		if nums[fast] != 0 {
			// Move the non-zero element to the slow pointer's position
			nums[slow] = nums[fast]
			slow++
		}
		fast++
	}

	// Fill the remaining elements with 0's
	for slow < len(nums) {
		nums[slow] = 0
		slow++
	}
}

func main() {
	// Example usage
	nums := []int{0, 1, 0, 3, 12}
	fmt.Println("Before moving zeroes:", nums)
	moveZeroes(nums)
	fmt.Println("After moving zeroes:", nums)
}

/*
In this implementation, we use two pointers, slow and fast, to traverse the array in-place.
The slow pointer keeps track of the position of the last non-zero element, and the fast pointer
 iterates through the array. When we encounter a non-zero element with the fast pointer,
  we move it to the position of the slow pointer, and increment both pointers.
  After the first pass, all non-zero elements will be moved to the front of the array, and we can
  fill the remaining elements with 0's in the second pass. The resulting array will have all 0's
   moved to the end while maintaining the relative order of the non-zero elements.
*/
