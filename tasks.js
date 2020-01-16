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


//  11. Pow
function getPow(number, pow) {
    let result = 1
    if (pow < 0) {
        number = 1 / number
        pow = Math.abs(pow)
    }
    for (let i = 1; i <= pow; i++) result *= number
    return result
}

getPow(2, -3)


//  12. Check if the element includes in array
function isIncludes(array, element) {
    let result = false 
    array.forEach((item, i) => {
        if (array[i] === element) result = true
    })
    return result
}

isIncludes([1, 2, 3, 4, 5], 3)


//  13. Find shortest word in string 
function findShortest(string) {
    if (!string) throw new Error('Provided string is empty')

    const words = string.split(' ')
    let shortest = words[0]
    words.forEach(word => {
        if (shortest.length > word.length)
            shortest = word
    })
    return shortest
}

findShortest('qwer asds f')


//  14. Calculate the sum of the main diagonal of the matrix
function calcSumDiagonal(matrix) {
    let sum = 0
    matrix.forEach((row, i) => {
        row.forEach((col, j) => {
            if (i == j) sum += matrix[i][j] 
        })
    })
    return sum
}

calcSumDiagonal([[1, 2], [3, 4]])


//  15. Calculate the sum of the column of the matrix
function calcSumColumn(matrix, col) {
    if(col >= matrix.length) throw new Error('Matrix has less columns')
    
    let sum = 0 
    matrix.forEach((item) => {
        sum += item[col]
    })
    return sum
}

calcSumColumn([[1, 2], [3, 4]], 1) 


//  16. The sum of numbers which divide on value 
function getSum(value, lastNumber) {
    if (value > lastNumber) throw new Error('Value bigger than the last number')
        else if (value == 0) throw new Error('Value can`t be zero')

    let sum = 0
    for (let i = 0; i <= lastNumber; i++)
        if (i % value == 0) sum += i
    return sum
}

getSum(0, 30)


//  17. Check if two words are an anagram
function isAnagram(firstStr, secondStr) {
    if (firstStr.length !== secondStr.length) return false

    let firstArr = firstStr.split('').sort()
    let secondArr = secondStr.split('').sort()

    return firstArr.join('') === secondArr.join('')
}

isAnagram('sebek', 'kebes')


//  18. Check if number is prime
function isPrime(number) {
    if (number <= 1) return false

    for (let i = 2; i < number; i++) 
        if (number % i == 0) return false
    return true
}

isPrime(13)


//  19. Count vowels letters in string
function countVowels(string) {
    const vowels = ['a', 'o', 'i', 'u', 'e']
    let result = string.toLowerCase().split('').filter(letter => vowels.includes(letter))
    return result.length
}

const res = countVowels('sebEk')
console.log(res)


//  20. Count sum of the digits of the number
function sumDigits(num){ 
  let sum =  num.toString().split('').reduce((prev, cur) => { return +prev + +cur}); 
  return sum;
} 
let res = sumDigits(123);
console.log(res);


//  21. The difference between maximum and minimum as a number in the array
function mostNumber(array) {
    if (!array.length) throw new Error('Provided empty array')

    return Math.max(...array) - Math.min(...array)
}

mostNumber([1, 2, 3])


//  22. Find the words which are common between these strings.
function findCommon(string1, string2) {
    const array1 = string1.split(',')
    const array2 = string2.split(',')
    let commonWords = []

    array1.forEach(word => {
        if (array2.includes(word)) commonWords.push(word)
    })

    return commonWords.join(',')
}

findCommon("one,two,three", "four,five,one,two,six,three")


//  23. Count quantity of inversion in the array
function countInversion(array) {
    let inversion = 0
    array.forEach((item, i) => {
        if (item  > array[i + 1]) inversion += 1  
    })

    return inversion
}

countInversion([1, 2, 4, 3, 5, 7, 6]) 

//  23.1 
function countInversion(array) {
    const sortedArray = [...array].sort()
    const inversions = array.filter((item, i) => item !== sortedArray[i]).length
    return inversions
}

countInversion([1, 2, 5, 3, 4, 7, 6])


//  24. Count mean value of the array 
function countMean(array) {
    if (!array.length) throw new Error('Provided empty array')

    let sum = 0
    array.forEach(item => sum += item)

    return sum / array.length
}

countMean([1, 2, 3, 4])


//  25. Count sum of object values
function sumPrices(prices) {

  let sum = 0;
  for (let price of Object.values(prices)) sum += price;

  return sum;
}

sumPrices(prices = {'bread': 20, 'beer': 30, 'meat': 90 })
