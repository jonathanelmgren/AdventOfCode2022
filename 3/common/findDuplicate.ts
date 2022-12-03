export const findDuplicateFromStr = (array: Array<string>): string => {
    for (const str of array[0]) {
        if (array.filter((s) => s.includes(str)).length > array.length - 1) {
            return str
        }
    }
}