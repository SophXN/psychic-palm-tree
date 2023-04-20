package main

import (
	"fmt"
	"sort"
)

func main() {
	fmt.Printf("Testing anagram and nagaram, should be true: %v\n", isAnagram("anagram", "nagaram"))
	fmt.Printf("Testing anagram and nagaram, should be false: %v\n", isAnagram("rat", "car"))
}

func isAnagram(s string, t string) bool {
	// sort the words
	strS := sortString(s)
	strT := sortString(t)

	// iterate and return false if something isn't matching
	for i := 0; i < len(s); i++ {
		if strS[i] != strT[i] || len(s) != len(t) {
			return false
		}
	}
	return true
}

func sortString(a string) []rune {
	str := []rune(a)
	sort.Slice(str, func(i, j int) bool {
		return str[i] < str[j]
	})
	return str
}

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different
// word or phrase, typically using all the original letters exactly once.
