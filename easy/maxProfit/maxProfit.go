package main

import "fmt"

func main() {
	fmt.Printf("Expecting 5, result it: %v\n", maxProfit([]int{7, 1, 5, 3, 6, 4}))
}

func maxProfit(prices []int) int {
	if len(prices) == 0 {
		return 0
	}

	minPrice := prices[0] // Track the minimum price seen so far
	maxProfit := 0        // Track the maximum profit seen so far

	for i := 1; i < len(prices); i++ {
		// If current price is lower than minPrice, update minPrice
		if prices[i] < minPrice {
			minPrice = prices[i]
			// If current price - minPrice is higher than maxProfit, update maxProfit
		} else if prices[i]-minPrice > maxProfit {
			maxProfit = prices[i] - minPrice
		}
	}
	return maxProfit
}

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
