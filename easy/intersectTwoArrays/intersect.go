package main

import "fmt"

func main() {
	fmt.Printf("Test 1: should be [4,9] or [9,4] : %v", intersect([]int{4, 9, 5}, []int{9, 4, 9, 8, 4}))

}

// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays
// and you may return the result in any order.
func intersect(nums1 []int, nums2 []int) []int {
	// gotta have the result slice
	var result []int

	// store the freq of num1's value occurances in a map
	freqMap := make(map[int]int)
	for _, num := range nums1 {
		freqMap[num]++
	}

	// iterate over nums2
	for _, num := range nums2 {
		// if it's in the freqMap
		if freqMap[num] > 0 {
			// add to result
			result = append(result, num)
			// remember to lower the count when we add it to result
			freqMap[num]--
		}
	}
	return result
}
