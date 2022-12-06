import * as fs from 'fs'

const input = fs.readFileSync('./6/data.txt', 'utf8')

const splitted = input.split('')

// Change sequenceAmount to 14 for part 2
const sequenceAmount = 4

let answer: number | undefined;

for (let i = 0; i < splitted.length; i++) {
    const str = splitted[i]
    let sequence = ''
    for (let x = 0; x < sequenceAmount; x++) {
        if (splitted[i + x]) {
            sequence += splitted[i + x]
        }
    }


    if (sequence.split("").length !== new Set(sequence.split("")).size) {
        continue
    }
    answer = i + sequence.length
    break
}

console.log(answer)
