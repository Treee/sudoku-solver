export class SudokuSolver {

    puzzle: number[] = [];

    constructor() { }

    importPuzzle(array: number[]) {
        // js shortcut for copying an array
        this.puzzle = array.slice();
    }

    isPuzzleSolved(): boolean {
        return false;
    }

    checkLocalCube(cellIndex: number, potentialNumber: number): boolean {
        // mod 9 gives us a nice segregation of cubes via the indicies
        // divide 9 gives us the cube we are looking at
        const currentCube = Math.floor(cellIndex / 9);
        // console.log(`Current Cube: ${currentCube}`);
        const minCubeIndex = currentCube * 9;
        const maxCubeIndex = minCubeIndex + 8;
        // console.log(`Min Index: ${minCubeIndex} Max Index: ${maxCubeIndex}`);
        let isValidNumberPlacement = true;
        // if there are no duplicates of this number in the cell, then it is a valid placement
        for (let currentIndex = minCubeIndex; currentIndex <= maxCubeIndex; currentIndex++) {
            // console.log(`Checking Index: ${currentIndex} with value: ${this.puzzle[currentIndex]} against potential value: ${potentialNumber}`);;
            isValidNumberPlacement = isValidNumberPlacement && (this.puzzle[currentIndex] !== potentialNumber);
        }
        // console.log(`Local Cube validity for number: ${potentialNumber} - ${isValidNumberPlacement}`);
        return isValidNumberPlacement;
    }

    checkGlobalRow(cellIndex: number, potentialNumber: number): boolean {
        // 3 cubes per row so 3 checks
        const currentCube = Math.floor(cellIndex / 9);

        const cubeColNumber = currentCube % 3;
        let isValidNumberPlacement = true;
        // console.log(`Current Cube: ${currentCube} Column: ${cubeColNumber}`);
        if (cubeColNumber === 0) {
            // we check next 2 cube rows
            isValidNumberPlacement = isValidNumberPlacement && this.checkLocalRow(cellIndex, potentialNumber);
            isValidNumberPlacement = isValidNumberPlacement && this.checkLocalRow(cellIndex + 9, potentialNumber);
            isValidNumberPlacement = isValidNumberPlacement && this.checkLocalRow(cellIndex + 18, potentialNumber);
        }
        if (cubeColNumber === 1) {
            // we check previous cube row and next cube row
            isValidNumberPlacement = isValidNumberPlacement && this.checkLocalRow(cellIndex, potentialNumber);
            isValidNumberPlacement = isValidNumberPlacement && this.checkLocalRow(cellIndex + 9, potentialNumber);
            isValidNumberPlacement = isValidNumberPlacement && this.checkLocalRow(cellIndex - 9, potentialNumber);
        }
        if (cubeColNumber === 2) {
            // we check previous 2 cube rows            
            isValidNumberPlacement = isValidNumberPlacement && this.checkLocalRow(cellIndex, potentialNumber);
            isValidNumberPlacement = isValidNumberPlacement && this.checkLocalRow(cellIndex - 9, potentialNumber);
            isValidNumberPlacement = isValidNumberPlacement && this.checkLocalRow(cellIndex - 18, potentialNumber);
        }

        return isValidNumberPlacement;
    }

    checkLocalRow(cellIndex: number, potentialNumber: number): boolean {
        // mod 9 gives us a nice segregation of cubes via the indicies
        // divide 9 gives us the cube we are looking at
        const currentCube = Math.floor(cellIndex / 9);
        // console.log(`Current Cube: ${currentCube}`);
        // local cube index 0-9
        let localCubeIndex = cellIndex % 9;

        const localRowNumber = Math.floor(localCubeIndex / 3);
        const localColNumber = (localCubeIndex % 3);
        // console.log(`Local Cube Index: ${localCubeIndex} Local Row: ${localRowNumber} Local Col: ${localColNumber}`);
        let isValidNumberPlacement = true;
        // if there are no duplicates of this number in the cell, then it is a valid placement
        // this cell is either first, middle, last (colnumber)
        // check the next 2 cells
        if (localColNumber === 0) {
            isValidNumberPlacement = isValidNumberPlacement && (this.puzzle[cellIndex + 1] !== potentialNumber)
            isValidNumberPlacement = isValidNumberPlacement && (this.puzzle[cellIndex + 2] !== potentialNumber)
        }
        // check the first and last cell
        if (localColNumber === 1) {
            isValidNumberPlacement = isValidNumberPlacement && (this.puzzle[cellIndex + 1] !== potentialNumber)
            isValidNumberPlacement = isValidNumberPlacement && (this.puzzle[cellIndex - 2] !== potentialNumber)
        }
        // check the previous 2 cells
        if (localColNumber === 2) {
            isValidNumberPlacement = isValidNumberPlacement && (this.puzzle[cellIndex - 1] !== potentialNumber)
            isValidNumberPlacement = isValidNumberPlacement && (this.puzzle[cellIndex - 2] !== potentialNumber)
        }
        // console.log(`Local Cube validity for number: ${potentialNumber} - ${isValidNumberPlacement}`);
        return isValidNumberPlacement;
    }

    checkGlobalCol(cellIndex: number, potentialNumber: number): boolean {
        return true;
    }

    checkLocalCol(cellIndex: number, potentialNumber: number): boolean {
        return false;
    }


    /*

     0         1         2
    0-8       9-17     18-26
     3         4         5
    27-35     36-44    45-53
     6         7         8
    54-62     63-71    72-80
    
         1  2  3   4  5  6    7  8  9
      ----------------------------------
    1 |  0  1  2 | 9  10 11 | 18 19 20 |
    2 |  3  4  5 | 12 13 14 | 21 22 23 |
    3 |  6  7  8 | 15 16 17 | 24 25 26 |
      |--------------------------------|
    4 | 27 28 29 | 36 37 38 | 45 46 47 |
    5 | 30 31 32 | 39 40 41 | 48 49 50 |
    6 | 33 34 35 | 42 43 44 | 51 52 53 |
      |--------------------------------|
    7 | 54 55 56 | 63 64 65 | 72 73 74 |
    8 | 57 58 59 | 66 67 68 | 75 76 77 |
    9 | 60 61 62 | 69 70 71 | 78 79 80 |
      ----------------------------------
    */
}