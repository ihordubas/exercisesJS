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