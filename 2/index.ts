import * as fs from 'fs'

const input = fs.readFileSync('./2/data.txt', 'utf8').split('\n')

enum EnemyChoices {
    ROCK = "A",
    PAPER = "B",
    SCICCORS = "C"
}
enum MyChoices {
    ROCK = "X",
    PAPER = "Y",
    SCICCORS = "Z"
}

enum Picks {
    LOOSE = "X",
    DRAW = "Y",
    WIN = "Z"
}

interface Round {
    enemy: EnemyChoices,
    mine: MyChoices | Picks
}

const rounds: Array<Round> = []

for (let i of input) {
    const splitted = i.split(' ')
    const enemyChoice = splitted[0] as EnemyChoices
    const myChoice = splitted[1] as MyChoices
    rounds.push({ enemy: enemyChoice, mine: myChoice })
}
const getPointsForChoice = (myChoice: MyChoices): number => {
    switch (myChoice) {
        case MyChoices.ROCK:
            return 1
        case MyChoices.PAPER:
            return 2
        case MyChoices.SCICCORS:
            return 3
    }
}
const getRoundPoints = (enemyChoice: EnemyChoices, myChoice: MyChoices): number => {
    switch (enemyChoice) {
        case EnemyChoices.ROCK:
            if (myChoice === MyChoices.ROCK) return 3
            if (myChoice === MyChoices.PAPER) return 6
            if (myChoice === MyChoices.SCICCORS) return 0
        case EnemyChoices.PAPER:
            if (myChoice === MyChoices.ROCK) return 0
            if (myChoice === MyChoices.PAPER) return 3
            if (myChoice === MyChoices.SCICCORS) return 6
        case EnemyChoices.SCICCORS:
            if (myChoice === MyChoices.ROCK) return 6
            if (myChoice === MyChoices.PAPER) return 0
            if (myChoice === MyChoices.SCICCORS) return 3
    }
}
const calculateMyPick = (enemyChoice: EnemyChoices, pick: Picks): MyChoices => {
    switch (enemyChoice) {
        case EnemyChoices.ROCK:
            if (pick === Picks.WIN) return MyChoices.PAPER
            if (pick === Picks.LOOSE) return MyChoices.SCICCORS
            if (pick === Picks.DRAW) return MyChoices.ROCK
        case EnemyChoices.PAPER:
            if (pick === Picks.WIN) return MyChoices.SCICCORS
            if (pick === Picks.LOOSE) return MyChoices.ROCK
            if (pick === Picks.DRAW) return MyChoices.PAPER
        case EnemyChoices.SCICCORS:
            if (pick === Picks.WIN) return MyChoices.ROCK
            if (pick === Picks.LOOSE) return MyChoices.PAPER
            if (pick === Picks.DRAW) return MyChoices.SCICCORS
    }
}
const calcSum = (rounds: Array<Round>): number => {
    let sum = 0
    for (const round of rounds) {
        /* Part 2 */ round.mine = calculateMyPick(round.enemy, round.mine as Picks)

        sum += getPointsForChoice(round.mine)
        sum += getRoundPoints(round.enemy, round.mine)
    }
    return sum
}

console.log(calcSum(rounds))

