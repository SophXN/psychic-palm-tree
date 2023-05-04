Reference visualizations of algorithms here https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

Also great reference from Arnaud https://arnaudbrousseau.com/notes/tech-interviews.html

Algorithms

1. Bubble Sort
2. Selection Sort
3. Insertion Sort
4. Merge Sort
5. Quick Sort
6. Counting Sort
7. Radix Sort
8. Heap Sort
9. Bucket Sort
10. Shell Sort

<!--
Algorithm	     Worst Case	 Average Case	Best Case	Space Complexity
--------------------------------------------------------------------------
Bubble Sort	     O(n^2)	     O(n^2)         O(n)	    O(1)
Selection Sort	 O(n^2)	     O(n^2)	        O(n^2)	    O(1)
Insertion Sort	 O(n^2)	     O(n^2)	        O(n)	    O(1)
Merge Sort	     O(n log n)	 O(n log n)	    O(n log n)	O(n)
Quick Sort	     O(n^2)	     O(n log n)	    O(n log n)	O(log n)
Heap Sort	     O(n log n)	 O(n log n)	    O(n log n)	O(1)
Counting Sort	 O(n+k)	     O(n+k)	        O(n+k)	    O(k)
Radix Sort	     O(d(n+k))	 O(d(n+k))	    O(d(n+k))	O(n+k)
-->

### Bubble sort

We are moving the largest number to the end of the array everytime we make a pass.
This is done by comparing the current and next number, swapping if the current is
greater than the next value.
