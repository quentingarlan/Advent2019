export function SecureContainer(input: string): number {
    const range = input.split('-')
    const low = parseInt(range[0])
    const high = parseInt(range[1])
    let passwordCount = 0
    for (let i = low; i <= high; i++) {
        if (i.toString().length === 6 && checkCriterias(i)) {
            passwordCount++
        }
    }
    return passwordCount
}

function checkCriterias(input: number): boolean {
    let strNum = input.toString();
    let doubleDigit = false
    let alwaysIncreasing = true
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] === strNum[i + 1] && strNum[i] !== strNum[i + 2] && strNum[i] !== strNum[i -1]) {
            doubleDigit = true
        }
        if (strNum[i + 1] < strNum[i]) {
            alwaysIncreasing = false
        }
    }

    return doubleDigit && alwaysIncreasing
}