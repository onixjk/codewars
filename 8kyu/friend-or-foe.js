// ❓ DESCRIPTION:
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise,
// you can be sure he's not...

// Input strings will only contain letters.
// Note: keep the original order of the names in the output.

// 👌 TESTS:

// ["Ryan", "Kieran", "Mark"]                                       - ["Ryan", "Mark"]
// ["Ryan", "Jimmy", "123", "4", "Cool Man"]                        - ["Ryan"]
// ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"] - ["Jimm", "Cari", "aret"]
// ["Love", "Your", "Face", "1"]                                    - ["Love", "Your", "Face"]

// ✅ SOLUTION:

function friend(friends) {
    let newArray = []

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            newArray.push(friends[i])
        }
    }
    return newArray

    // or

    // return friends.filter(friend => friend.length === 4)
}
