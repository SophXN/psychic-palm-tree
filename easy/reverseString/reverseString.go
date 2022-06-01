package main

func reverseString(s []byte) {
	start := 0
	end := len(s) - 1

	for i := 0; i < len(s); i++ {
		if start < end {
			switchA := s[start]
			switchB := s[end]
			s[start] = switchB
			s[end] = switchA
			start++
			end--
		}

	}
	// fmt.Println(string(s))
}

func main() {
	array := []byte{'h', 'e', 'l', 'l', 'o'}
	reverseString(array)
}

/*
Write a function that reverses a string. The input string is given as an array of
characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/
