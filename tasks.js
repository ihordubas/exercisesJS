//  1. Get MAX value of array 
function getMax(array) {
    if (!array.length) throw new Error('Provided empty array')

    let max = array[0]
    array.forEach(item => {
        if (max < item) max = item
    })
    return max
}

getMax([1, 4, 2, 5])


//  1.1 Get MAX value of array
function getMax(array) {
    if (!array.length) throw new Error('Provided empty array')

    return Math.max(...array)
}

getMax([1, 4, 2, 5])


//  2. Get MIN value of array
function getMin(array) {
    if (!array.length) throw new Error('Provided empty array')

    let min = array[0]
    array.forEach(item => {
        if (min > item) min = item
    })
    return min
}

getMin([3, 5, 2, 6])



//  3. Get MIN EVEN value of array
function getMinEven(array) {
    if (!array.length) throw new Error('Provided empty array')

    let minEven = array[0]
    array.forEach(item => {
        if (item < minEven && item % 2 == 0) {
            minEven = item
        }
    })
    return minEven
}

getMinEven([3, 4, 2, 5, 6, 8])


//  4. Multiply two arrays
function multiplyArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error('Provided arrays with different sizes')
    }
    const result = arr1.map((item, i) => {
        return item * arr2[i]
    })
    return result
}

multiplyArrays([1, 2], [3, 4])


//  5. Remove items which aren't divisible by 3 from the array
function removeItems(array) {
    const result = array.filter(item => item % 3 !== 0)
    return result
}

removeItems([3, 2, 5, 6, 7, 9])


//  6. Increase the elements of array 1.5 times
function increaseItems(array) {
    if (!Array.isArray(array)) throw new Error('Provided not array')

    let result = array.map(item => item * 1.5)
    return result
}

increaseItems([1, 3, 5, 2, 4])



//  7. Reverse array
function reverseArr(array) {
    if (!Array.isArray(array)) throw new Error('Provided not array')

    let reversedArr = []
    for( let i = array.length - 1; i >= 0; i--)
        reversedArr.push(array[i])
    return reversedArr
}

reverseArr([1, 2, 3, 4, 5])



//  8. Increase the even indexes of the array by 2 times, decrease the odd indexes by 2.
function changeItems(array) {
    if (!Array.isArray(array)) throw new Error('Provided not array')

    let result = array.map((item, i) => i % 2 == 0 ? item * 2 : item / 2)
    return result
}

changeItems([1, 2, 3, 5, 4, 6])


//  9. The product of all positive elements of an array.
function productPositive(array) {
    if (!array.length) return 0

    let product = 1;
    array.forEach(item => product *= item > 0 ? item : 1) 
    return product
}

productPositive([1, 0, 3, 4, 5, -8])


//  10. Palindrome
function isPalindrome(str) {
    if (typeof str !== 'string') throw new Error('Provided not string')

    const palindrome = str.toLowerCase().split('').reverse().join('') 
    return str.toLowerCase() == palindrome 
}

isPalindrome('Civic')


//  11.