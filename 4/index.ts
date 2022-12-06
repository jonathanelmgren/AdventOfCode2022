import * as fs from 'fs'

const input = fs.readFileSync('./4/data.txt', 'utf8').split('\n')

const between = (x: number, min: number, max: number) => {
    return x >= min && x <= max;
}

interface Sections {
    from: number
    to: number
}

interface Pair {
    first: Sections
    second: Sections
}

type Pairs = Array<Pair>

const pairs: Pairs = []

for (const row of input) {
    const pair: Pair = {
        first: {
            from: undefined,
            to: undefined
        },
        second: {
            from: undefined,
            to: undefined
        }
    }
    const firstPair = row.split(',')[0]
    const secondPair = row.split(',')[1]

    pair.first.from = parseInt(firstPair.split('-')[0])
    pair.first.to = parseInt(firstPair.split('-')[1])

    pair.second.from = parseInt(secondPair.split('-')[0])
    pair.second.to = parseInt(secondPair.split('-')[1])

    pairs.push(pair)
}

let sumPartOne = 0
let sumPartTwo = 0
for (const pair of pairs) {
    const { first, second } = pair
    const { from: firstFrom, to: firstTo } = first
    const { from: secondFrom, to: secondTo } = second

    if ((between(secondFrom, firstFrom, firstTo) && between(secondTo, firstFrom, firstTo)) || (between(firstFrom, secondFrom, secondTo) && between(firstTo, secondFrom, secondTo))) {
        sumPartOne++
    }
    if ((between(secondFrom, firstFrom, firstTo) || between(secondTo, firstFrom, firstTo)) || (between(firstFrom, secondFrom, secondTo) || between(firstTo, secondFrom, secondTo))) {
        sumPartTwo++
    }
}

console.log(`Part 1: ${sumPartOne}`)
console.log(`Part 2: ${sumPartTwo}`)
