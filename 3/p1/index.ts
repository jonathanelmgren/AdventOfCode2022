import * as fs from 'fs'
import { calculatePriority } from '../common/calcPriority.js'
import { findDuplicateFromStr } from '../common/findDuplicate.js'

const input = fs.readFileSync('./3/data.txt', 'utf8').split('\n')

let sum = 0
for (const ruckSack of input) {
    const compartmentOne = []
    const compartmentTwo = []
    for (let i = 0; i < ruckSack.length; i++) {
        if (i <= (ruckSack.length / 2) - 1) {
            compartmentOne.push(ruckSack[i])
        } else {
            compartmentTwo.push(ruckSack[i])
        }
    }
    const duplicateItem = findDuplicateFromStr([compartmentOne.join(''), compartmentTwo.join('')])
    const prio = calculatePriority(duplicateItem)
    sum += prio
}


console.log(sum);
