package main

import "fmt"

func bubbleSort(arr []int) {
	n := len(arr)
	for i := 0; i < n-1; i++ {
		for j := 0; j < n-i-1; j++ {
			if arr[j] > arr[j+1] {
				// swap arr[j] and arr[j+1]
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}
}

func bubbleSortString(arr []string) {
	n := len(arr)
	for i := 0; i < n-1; i++ {
		for j := 0; j < n-i-1; j++ {
			// according to the ASCII values of their characters
			if arr[j] > arr[j+1] {
				// swap arr[j] and arr[j+1] using multiple assignment
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}
}

func main() {
	arr := []int{5, 2, 6, 1, 3}
	fmt.Println("Before sorting:", arr)
	bubbleSort(arr)
	fmt.Println("After sorting:", arr)

	arrA := []string{"banana", "apple", "orange", "pear", "grape"}
	fmt.Println("Before sorting:", arrA)
	bubbleSortString(arrA)
	fmt.Println("After sorting:", arrA)
}
