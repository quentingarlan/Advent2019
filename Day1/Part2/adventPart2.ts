export function TyrannyRocketEquation(advList: string): number {
    const input: string[] = advList.split('\n')
    let totalFuelCounter = 0;
    for (let i = 0; i < input.length; i++) {
        const mass: number = +input[i]
        let neededFuel: number = mass
        let calcFuel: number = mass
        while (calcFuel > 0) {
            calcFuel = Math.floor(neededFuel / 3) - 2
            if (calcFuel > 0) {
                totalFuelCounter += calcFuel
            }

            neededFuel = calcFuel
        }
    }
    return totalFuelCounter
}
