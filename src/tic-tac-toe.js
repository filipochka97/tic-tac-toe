class TicTacToe {
    constructor() {
        this.X = 'x';
        this.O = 'o';
        this.gridMass = [
        [null, null, null], 
        [null, null, null],
        [null, null, null]
        ];
        this.currentSymbol = this.X;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.gridMass[rowIndex][columnIndex]) {
            this.gridMass[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            if (this.currentSymbol === this.X) {
               this.currentSymbol = this.O; 
            } else {
                this.currentSymbol = this.X;
            }
        }
    }

    isFinished() {
        if (this.getWinner()) {
            return true;
        }
        if (this.noMoreTurns()) {
            return true;
        }

        return false;
    }

    getWinner() {
        const m = this.gridMass;
        for (let i = 0; i < m.length; i++) {
            if (m[i][0]) {
                if (m[i][0] === m[i][1] && m[i][0] === m[i][2]) {
                    if (this.getCurrentPlayerSymbol() === this.X) {
                        return this.O;
                    } else return this.X;
                }
            }
        }

        for (let i = 0; i < m.length; i++) {
            if (m[0][i]) {
                if (m[0][i] === m[1][i] && m[1][i] === m[2][i]) {
                    if (this.getCurrentPlayerSymbol() === this.X) {
                        return this.O;
                    } else return this.X;
                }
            }
        }

        if (m[0][0]) {
            if (m[0][0] === m[1][1] && m[0][0] === m[2][2]) {
                if (this.getCurrentPlayerSymbol() === this.X) {
                        return this.O;
                    } else return this.X;
            }
        }

        if (m[2][0]) {
            if (m[2][0] === m[1][1] && m[2][0] === m[0][2]) {
                if (this.getCurrentPlayerSymbol() === this.X) {
                        return this.O;
                    } else return this.X;
            }
        }

        return null;

    }

    noMoreTurns() {
         for (let i = 0; i < this.gridMass.length; i++) {
            for (let j = 0; j < this.gridMass.length; j++) {
                if (!this.gridMass[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (!this.isFinished() || this.getWinner()) {
            return false;
        }
        
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gridMass[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
