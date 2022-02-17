export function CrossedWires(firstLine: string, secondLine: string): number {
    let boardVisited1 = drawLines(firstLine)
    let boardVisited2 = drawLines(secondLine)
    var intersections = boardVisited1.filter(element => boardVisited2.includes(element));
    var lowestDistance = Number.MAX_VALUE
    intersections.forEach(element => {
        const x = parseInt(element.split(',')[0])
        const y = parseInt(element.split(',')[1])
        const dist = ManhattanDistance(0, 0, x, y)
        if (dist < lowestDistance){
            lowestDistance = dist
        } 
    });
    console.log('intesections', intersections)
    return lowestDistance
}

function drawLines(lineInput: string,): string[] {
    let line: any[] = lineInput.split(',')
    let x = 0
    let y = 0
    let boardVisited: string[] = []
    for (let i = 0; i < line.length; i++) {
        const move = getNumberFromString(line[i])
        switch (line[i][0]) {
            case 'L':
                for (let i = move; i > 0; i--) {
                    x--
                    boardVisited.push(`${x},${y}`)
                }
                break;
            case 'R':
                for (let i = move; i > 0; i--) {
                    x++
                    boardVisited.push(`${x},${y}`)
                }
                break;
            case 'U':
                for (let i = move; i > 0; i--) {
                    y--
                    boardVisited.push(`${x},${y}`)
                }
                break;
            case 'D':
                for (let i = move; i > 0; i--) {
                    y++
                    boardVisited.push(`${x},${y}`)
                }
                break;
            default:
                break;
        }
    }
    return boardVisited
}

function getNumberFromString(input: string): number {
    return parseInt(input.substring(1, input.length))
}

function ManhattanDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}
