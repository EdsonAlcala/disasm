export interface OpCodeDefinition {
    inputs: number;
    outputs: number;
    gasCost: number;
    mnemonic: string;
}

export class OpCodeMap {
    opCodeMap = new Map<string, OpCodeDefinition>();

    set(opCode: string, mnemonic: string, inputs: number, outputs: number, gasCost: number) {
        if (this.opCodeMap.has(opCode)) {
            throw new Error(`OpCode already set ${opCode}`)
        }
        const definition: OpCodeDefinition = {
            inputs,
            outputs,
            gasCost,
            mnemonic
        }
        // maybe also get implementation from another place...
        this.opCodeMap.set(opCode, definition)
    }

    get(opCode: string): OpCodeDefinition {
        // TODO: if opCode doesn't have 0x, I should add it
        const result = this.opCodeMap.get(`0x${opCode}`);
        if (!result) {
            throw new Error(`OpCode doesn't exist ${opCode}`)
        }
        return result;
    }
}

export const opCodeMap = new OpCodeMap();