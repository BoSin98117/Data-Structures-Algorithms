




//              9
//      4               20
//   1     6       15       170
// BFS[9, 4, 20, 1, 6, 15, 170]
// DFS[9, 4, 1, 6, 20, 15, 170]

// InOrder - [1, 4, 6, 9, 15, 20, 170]
// PreOrder - [9, 4, 1, 6, 20, 15, 170]    // very useful in recreating a tree becaue it is ordered
// PostOrder - [1, 6, 4, 15, 170, 20, 9]


// InOrder - root node is in the middle
// PreOrder - root node is in the beginning
// PostOrder - root node is at the end



var isPalindrome = function (x) {
    let str = x;
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str.charAt(start++) != str.charAt(end--)) {
            return false;
        }
        return true;
    }
}

console.log(isPalindrome(121));












