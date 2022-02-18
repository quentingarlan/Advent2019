export function CrossedWires(firstLine: string, secondLine: string): number {
    let boardVisited1 = drawLines(firstLine)
    let boardVisited2 = drawLines(secondLine)

    let leastSteps = Number.MAX_VALUE
    let intersections: Point[] = []

    boardVisited1.forEach(pt => {
        const commonPoint = boardVisited2.find(pt2 => pt.x === pt2.x && pt.y === pt2.y)
        if (commonPoint){
            const nbSteps = pt.steps + commonPoint.steps
            if(nbSteps < leastSteps){
                leastSteps = nbSteps
            }
        }

    })
    console.log('intersecont', intersections)

    return leastSteps
}

function drawLines(lineInput: string,): Point[] {
    let line: any[] = lineInput.split(',')
    let x = 0
    let y = 0
    let nbSteps = 0
    let boardVisited: Point[] = []
    for (let i = 0; i < line.length; i++) {
        const move = getNumberFromString(line[i])
        switch (line[i][0]) {
            case 'L':
                for (let i = move; i > 0; i--) {
                    x--
                    nbSteps++
                    setPointInBoard(x, y, boardVisited, nbSteps)
                }
                break;
            case 'R':
                for (let i = move; i > 0; i--) {
                    x++
                    nbSteps++
                    setPointInBoard(x, y, boardVisited, nbSteps)
                }
                break;
            case 'U':
                for (let i = move; i > 0; i--) {
                    y--
                    nbSteps++
                    setPointInBoard(x, y, boardVisited, nbSteps)
                }
                break;
            case 'D':
                for (let i = move; i > 0; i--) {
                    y++
                    nbSteps++
                    setPointInBoard(x, y, boardVisited, nbSteps)
                }
                break;
            default:
                break;
        }
    }
    return boardVisited
}

function setPointInBoard(x: number, y: number, boardVisited: Point[], nbSteps: number) {
    const pt = new Point
    pt.x = x
    pt.y = y
    pt.steps = nbSteps
    boardVisited.push(pt)
}

class Point {
    x: number
    y: number
    steps: number
}

function getNumberFromString(input: string): number {
    return parseInt(input.substring(1, input.length))
}

function ManhattanDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}
