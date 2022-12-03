import * as fs from 'fs'
import { calculatePriority } from '../common/calcPriority.js';
import { findDuplicateFromStr } from '../common/findDuplicate.js';

const input = fs.readFileSync('./3/data.txt', 'utf8').split('\n')

const chunkArray = (arr: Array<string>, size: number): Array<Array<string>> =>
    arr.length > size
        ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
        : [arr];

const ruckSackGroups = chunkArray(input, 3)
let sum = 0
for (const ruckSack of ruckSackGroups) {
    const duplicateItem = findDuplicateFromStr(ruckSack)
    const prio = calculatePriority(duplicateItem)
    sum += prio
}
console.log(sum);
