package main

import "fmt"

func main() {
	mat := [][]int{{1, 2}, {3, 4}}
	r := 1
	c := 4

	newMat := matrixReshape(mat, r, c)
	fmt.Printf("reshaped: %v", newMat)
}
func matrixReshape(mat [][]int, r int, c int) [][]int {
	m := len(mat)
	n := len(mat[0])

	// Check if reshape operation is possible
	if m*n != r*c {
		return mat
	}

	// Initialize new reshaped matrix with zeros
	newMat := make([][]int, r)
	for i := range newMat {
		newMat[i] = make([]int, c)
	}

	// Traverse through the original matrix and fill the new matrix
	for i := 0; i < m*n; i++ {
		row := i / n
		col := i % n
		newRow := i / c
		newCol := i % c
		newMat[newRow][newCol] = mat[row][col]
	}

	return newMat
}
