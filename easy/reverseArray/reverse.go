/*
Given the size and the elements of array A, print all the elements in reverse order.

Input:
First line of input contains, N - size of the array.
Following N lines, each contains one integer, i{th} element of the array i.e. A[i].

Output:
Print all the elements of the array in reverse order, each element in a new line.

*/

package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	// Initialize an array of size n
	arr := make([]int, n)

	// Read the array elements from input
	for i := 0; i < n; i++ {
		fmt.Scan(&arr[i])
	}

	for i := n - 1; i >= 0; i-- {
		fmt.Println(arr[i])
	}
}
