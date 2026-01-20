// ❓ DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.

// 👌 TESTS:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

// ✅ SOLUTION:
function findSmallestInt(arr) {
    let theSmallestNum = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (theSmallestNum > arr[i]) {
            theSmallestNum = arr[i]
        }
    }

    return theSmallestNum;
}