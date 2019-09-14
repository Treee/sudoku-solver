import { SudokuSolver } from './sudoku-solver';

describe('Sudoku Solver', () => {
    let solver: SudokuSolver;
    const simplePuzzleSolved = [5, 3, 4, 6, 7, 2, 1, 9, 8, 6, 7, 8, 1, 9, 5, 1, 4, 2, 9, 1, 2, 3, 4, 8, 5, 6, 7, 8, 5, 9, 4, 2, 6, 7, 1, 3, 7, 6, 1, 8, 5, 3, 9, 2, 4, 4, 2, 3, 7, 9, 1, 8, 5, 6, 9, 6, 1, 2, 8, 7, 3, 4, 5, 5, 3, 7, 4, 1, 9, 2, 8, 6, 2, 8, 4, 6, 3, 5, 1, 7, 9]
    const simplePuzzleUnsolved = [5, 3, -1, 6, -1, -1, -1, 9, 8, -1, 7, -1, 1, 9, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, -1, 8, -1, -1, 4, -1, -1, 7, -1, -1, -1, 6, -1, 8, -1, 3, -1, 2, -1, -1, -1, 3, -1, -1, 1, -1, -1, 6, -1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 1, 9, -1, 8, -1, 2, 8, -1, -1, -1, 5, -1, 7, 9]


    beforeEach(() => {
        solver = new SudokuSolver();
        solver.importPuzzle(simplePuzzleUnsolved);
    });

    it('knows if a puzzle is unsolved', () => {
        const expectedPuzzleSolveStatus = false;
        const actualPuzzleSolveStatus = solver.isPuzzleSolved();
        expect(actualPuzzleSolveStatus).toEqual(expectedPuzzleSolveStatus);
    });


    it('can import an existing puzzle', () => {
        solver.importPuzzle(simplePuzzleSolved);
        expect(solver.puzzle).toEqual(simplePuzzleSolved)
        solver.importPuzzle(simplePuzzleUnsolved);
        expect(solver.puzzle).toEqual(simplePuzzleUnsolved)
    });

    it('can check the local 3x3 if the current solution is valid', () => {
        let index = 2;
        let expectedValidityOfNumberPlacement = true;
        let actualValidityOfNumberPlacement = solver.checkLocalCube(index, simplePuzzleSolved[index]);
        expect(actualValidityOfNumberPlacement).toEqual(expectedValidityOfNumberPlacement, 'Index 2')

        index = 4;
        expectedValidityOfNumberPlacement = true;
        actualValidityOfNumberPlacement = solver.checkLocalCube(index, simplePuzzleSolved[index]);
        expect(actualValidityOfNumberPlacement).toEqual(expectedValidityOfNumberPlacement, 'Index 4')

        index = 19;
        expectedValidityOfNumberPlacement = true;
        actualValidityOfNumberPlacement = solver.checkLocalCube(index, simplePuzzleSolved[index]);
        expect(actualValidityOfNumberPlacement).toEqual(expectedValidityOfNumberPlacement, 'Index 19')
    });

    it('can check the global row if the current solution is valid', () => {
        let index = 2;
        let expectedValidityOfNumberPlacement = true;
        let actualValidityOfNumberPlacement = solver.checkGlobalRow(index, simplePuzzleSolved[index]);
        expect(actualValidityOfNumberPlacement).toEqual(expectedValidityOfNumberPlacement)

    });

    it('can check the local row if the current solution is valid', () => {
        let index = 2;
        let expectedValidityOfNumberPlacement = true;
        let actualValidityOfNumberPlacement = solver.checkLocalRow(index, simplePuzzleSolved[index]);
        expect(actualValidityOfNumberPlacement).toEqual(expectedValidityOfNumberPlacement)

        index = 4;
        expectedValidityOfNumberPlacement = true;
        actualValidityOfNumberPlacement = solver.checkLocalRow(index, simplePuzzleSolved[index]);
        expect(actualValidityOfNumberPlacement).toEqual(expectedValidityOfNumberPlacement)

        index = 19;
        expectedValidityOfNumberPlacement = true;
        actualValidityOfNumberPlacement = solver.checkLocalRow(index, simplePuzzleSolved[index]);
        expect(actualValidityOfNumberPlacement).toEqual(expectedValidityOfNumberPlacement)
    });

    it('can check the global column if the current solution is valid', () => {

    });

    xit('knows a solved solution when it sees one', () => {
        solver.importPuzzle(simplePuzzleSolved);
        expect(solver.isPuzzleSolved()).toBe(true, 'Puzzle is solved yet this says it is not solved.');
        solver.importPuzzle(simplePuzzleUnsolved);
        expect(solver.isPuzzleSolved()).toBe(false, 'Puzzle is not solved yet this says it is solved.');
    });
});