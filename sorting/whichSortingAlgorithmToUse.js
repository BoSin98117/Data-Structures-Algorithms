//#1 - Sort 10 schools around your house by distance:
insertion sort
input is only 10 which is very small
space complexity of O(1)
10 schools are nearly sorted or sorted

//#2 - eBay sorts listings by the current Bid amount:
radix or counting sort
bid will always be numbers
a bid is usually between $1 - $100 
bid is fixed length

//#3 - Sport scores on ESPN
Quick sort
Sport scores can vary.There are different score types per sport.Quick sort is good although it may have the worst case, the scores are most likely not going to be sorted.  
Merge sort may not be good due to the increase in space complexity O(n) vs quick sort that has better space complexity O(log n).

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
Merge Sort
We are not sorting in memory because the data is huge(can't fit in memory).  
Because the data is so big, performance is an issue.We don't want Quick Sort because it has a worst case of O(n^2).  Using Merge Sort, we get O(n log n).  

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
Insertion Sort
Although there may be many reviews already in the database, the data is probably already sorted and all we are doing is adding 2 new reviews.With insertion sort the time complexity is O(n)

//#6 - Temperature Records for the past 50 years in Canada
radix or counting Sort if the temperature has no decimal places because radix or counting sort only works with whole numbers.

Quick sort if temperature has decimal places to do some in memory sorting.


//#7 - Large user name database needs to be sorted. Data is very random.
Merge sort is we have enough memory or if memory is not expensive.  

Quick sort if you're not too worried about worst case and that the username database is not super large.  Also to save on memory space. 


//#8 - You want to teach sorting
Bubble sort