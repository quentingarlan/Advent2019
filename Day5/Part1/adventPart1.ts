export function ProgramAlarm(advList: string): number {
    let input: any[] = advList.split(',')
    input = input.map(Number)
    let res = checkInputs(1, input)
    return res
}

function checkInputs(parameter: number, input: number[]): number {
    let output: number = 0;
    let pt: number = 0;

    while (true) {
        const instruction = input[pt].toString()
        const opCode = parseInt(instruction.substring(instruction.length - 1, instruction.length))
        const param1 = instruction.substring(instruction.length - 2, instruction.length - 1)
        const param2 = instruction.substring(instruction.length - 3, instruction.length - 2)
        const param3 = instruction.substring(instruction.length - 4, instruction.length - 3)
        switch (opCode) {
            case 1:
                input[input[pt + 3]] = input[input[pt + 1]] + input[input[pt + 2]]
                pt +=4
                break
            case 2:
                input[input[pt + 3]] = input[input[pt + 1]] * input[input[pt + 2]]
                pt +=4
                break
            case 3:
                input[input[pt + 1]] = parameter
                pt +=2
                break
            case 4:
                output = input[pt + 1]
                pt +=2
                break
            case 99:
                pt = input.length
                break
        }
    }
    return input[0]
}

enum mode {
    position,
    value
}