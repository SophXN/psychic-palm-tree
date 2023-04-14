package main

import "fmt"

func main() {
	s := twoPointers("HIREIH")
	fmt.Printf("should be true: %v\n", s)
	t := twoPointers("MEOWOEMAM")
	fmt.Printf("should be false: %v", t)
}

func twoPointers(a string) bool {
	b := []byte(a)
	left := 0
	right := len(b) - 1
	for left <= right {
		if b[left] != b[right] {
			return isPalindrome(b, left+1, right) || isPalindrome(b, left, right-1)
		}
		left = left + 1
		right = right - 1
	}
	return true
}

func isPalindrome(b []byte, i, j int) bool {
	// loop through the string from both ends until the pointers meet in the middle
	for i < j {
		// if the characters at the two pointers are different
		if b[i] != b[j] {
			// the string is not a palindrome
			return false
		}
		// move the pointers closer to the middle
		i++
		j--
	}
	// the string is a palindrome
	return true
}
