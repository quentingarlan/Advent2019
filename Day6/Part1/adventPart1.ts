export function UniversalOrbitMap(advList: string): number {
    const input: any[] = advList.split('\n')
    const res = checkInputs(input)
    return res
}

function checkInputs(input: string[]): number {
    let orbitMap : Map<string,number> = new Map<string,number>()
    input.forEach(i =>
        {
            const line = i.split(')')
            const object = line[0]
            const orbit = line[1]
        })
}
