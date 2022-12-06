import * as fs from 'fs'

const input = fs.readFileSync('./5/data.txt', 'utf8').split('\n')

const stackOfCrates = input.splice(0, input.indexOf(''))
const arrangementOrders = input.filter(i => i !== '')

const order = {}

for (let i = stackOfCrates.length - 1; i >= 0; i--) {
    for (let s = 0; s < stackOfCrates[i].split('').length; s++) {
        const string = s.toString()
        const number = !isNaN(parseInt(stackOfCrates[i][s])) ? parseInt(stackOfCrates[i][s]) : undefined
        const index = Object.keys(order).indexOf(string)
        if (number) {
            order[string] = []
        } else if (index > -1 && stackOfCrates[i][s] !== ' ') {
            order[string].push(stackOfCrates[i][s])
        }
    }
}

// Reorder key from string index to real index
Object.keys(order).map((key, i) => {
    const int = i + 1
    order[i + 1] = order[key]
    if (int.toString() !== key) {
        delete order[key]
    }
})

const arrangements = []
for (const arrangement of arrangementOrders) {
    const ar = {}
    for (let i = 0; i < arrangement.split(' ').length; i++) {
        if (arrangement.split(' ')[i] === 'move') {
            ar['move'] = parseInt(arrangement.split(' ')[i + 1])
        }
        if (arrangement.split(' ')[i] === 'from') {
            ar['from'] = parseInt(arrangement.split(' ')[i + 1])
        }
        if (arrangement.split(' ')[i] === 'to') {
            ar['to'] = parseInt(arrangement.split(' ')[i + 1])
        }
    }
    arrangements.push(ar)
}

for (const arrangement of arrangements) {
    const { from, to, move } = arrangement

    // Remove .revese() for part 2 solution
    const moved = order[from].splice(order[from].length - move, move).reverse()
    order[to] = [...order[to], ...moved]
}

let solution = ''
Object.keys(order).map(key => {
    solution += order[key][order[key].length - 1]
})

console.log(solution)