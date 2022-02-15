export function ProgramAlarm(advList: string): number {
    let noun = 0
    let verb = 0
    for (let i = 0; i < 99; i++) {
        for (let j = 99; j > 0; j--) {
            let input: any[] = advList.split(',')
            input = input.map(Number)
            let res = checkInputs(i, j, input)
            if (res === 19690720) {
                noun = i
                verb = j
                break
            }
        }
    }


    return 100 * noun + verb
}

function checkInputs(noun: number, verb: number, input: number[]): number {
    input[1] = noun
    input[2] = verb
    for (let i = 0; i < input.length; i = i + 4) {
        switch (input[i]) {
            case 1:
                input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]]
                break
            case 2:
                input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]]
                break
            case 99:
                i = input.length
                break
        }
    }
    return input[0]
}
