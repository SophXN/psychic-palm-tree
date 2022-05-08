package main

import (
	"fmt"
)

func main() {
	nums := []int{-1, 0, 3, 5, 9, 12}
	target := 9

	fmt.Println(search(nums, target))
}

func search(nums []int, target int) int {
	for i := 0; i < len(nums); i++ {
		if nums[i] == target {
			return i
		}
	}
	return -1
}
