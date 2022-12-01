import * as fs from 'fs'

const input = fs.readFileSync('./1/data.txt', 'utf8').split('\n')

const array: Array<number[]> = []
let index = 0
for (const i of input) i.length > 0 ? Array.isArray(array[index]) ? array[index].push(parseInt(i)) : array.push([parseInt(i)]) : index++

let sums = []
let biggestSum = 0
for (const calories of array) {
    const sum = calories.reduce((accumulator, value) => accumulator + value)
    if (sum > biggestSum) biggestSum = sum
    sums.push(sum)
}
// PART 1
console.log(biggestSum)

// PART 2
const topThreeSums = sums.sort((a, b) => a - b).slice(-3)
const total = topThreeSums.reduce((accumulator: number, value: number) => accumulator + value)
console.log(total)


