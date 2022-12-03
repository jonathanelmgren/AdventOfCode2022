export const calculatePriority = (string: string): number => {
    const isUpperCase = string === string.toUpperCase()
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let i = alphabet.indexOf(string.toLowerCase())
    i++
    return isUpperCase ? i + 26 : i
}