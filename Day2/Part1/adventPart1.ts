export function ProgramAlarm(advList: string): number {
    let input: any[] = advList.split(',')
    input = input.map(Number);
    input[1] = 12
    input[2] = 2
    for (let i = 0; i < input.length; i = i + 4) {
        switch (input[i]) {
            case 1:
                input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]]
                console.log(input)
                break
            case 2:
                input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]]
                break
            case 99:
                i = input.length
                break
        }
    }
    console.log(input)
    return input[0]
}
