interface Instruction {
    run: any
}

export class ADD implements Instruction {
    gasCost: number;
    inputs: number;
    output: number;

    constructor() {
        this.gasCost = 12312;
        this.inputs = 2;
        this.output = 2;
    }

    run() {
        // TODO
    }
}


// get gas cost table
// view opcodes
// view operation (evm view --opcode add)