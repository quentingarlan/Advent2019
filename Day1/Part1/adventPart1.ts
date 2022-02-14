export function TyrannyRocketEquation(advList: string): number {
    const input: string[] = advList.split('\n')
    let fuelCounter = 0;
    for (let i = 0; i < input.length; i++) {
        const mass:number = +input[i]
        fuelCounter += Math.floor(mass / 3) - 2
    }
    return fuelCounter
}
