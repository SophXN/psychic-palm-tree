package main

import (
	"fmt"
	"strings"
)

func reverseWords(sentence string) string {
	// reverse the entire string
	r := strings.Fields(sentence)

	// get the length of the slice
	n := len(r)

	for i := 0; i < n/2; i++ {
		r[i], r[n-1-i] = r[n-1-i], r[i]
	}

	s := r[:]

	result := strings.Trim(fmt.Sprint(s), "[]")
	return result
}

func main() {
	fmt.Printf(reverseWords("please hire me 😎"))
}
