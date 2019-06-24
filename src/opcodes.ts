/**
 *  @Developer
 *  @schema [opCode, mnemonic, inputs, outputs, gasCost]
 *  */

import { opCodeMap } from "./opCodeMap";

/* ============ 0s Stop and Arithmetic Operations ============ */

opCodeMap.set('0x00', "STOP", 0, 0, 0);       // Halts execution // Subset? zero // Hard Fork?
opCodeMap.set('0x01', "ADD", 2, 1, 3);        // Addition operation
opCodeMap.set('0x02', "MUL", 2, 1, 5);        // Multiplication operation
opCodeMap.set('0x03', "SUB", 2, 1, 3);        // Subtraction operation
opCodeMap.set('0x04', "DIV", 2, 1, 5);        // Integer division operation
opCodeMap.set('0x05', "SDIV", 2, 1, 5);       // Signed integer division operation (truncated)
opCodeMap.set('0x06', "MOD", 2, 1, 5);        // Modulo remainder operation
opCodeMap.set('0x07', "SMOD", 2, 1, 5);       // Signed modulo remainder operation
opCodeMap.set('0x08', "ADDMOD", 3, 1, 8);     // Modulo addition operation
opCodeMap.set('0x09', "MULMOD", 3, 1, 8);     // Modulo multiplication operation
opCodeMap.set('0x0a', "EXP", 2, 1, 10);       // TODO: Gas cost is dynamic, should I use Base cost = 10?
opCodeMap.set('0x0b', "SIGNEXTEND", 2, 1, 5); // Extend length of two’s complement signed integer

/* ============ 10s: Comparison & Bitwise Logic Operations ============ */






/* ============ 10s: Comparison & Bitwise Logic Operations ============ */

/* ============ 10s: Comparison & Bitwise Logic Operations ============ */

/* ============ 10s: Comparison & Bitwise Logic Operations ============ */

/* ============ 10s: Comparison & Bitwise Logic Operations ============ */

/* ============ 10s: Comparison & Bitwise Logic Operations ============ */

// opCodes.set('0x0', { mnemonic: "SAD", input: 1, output: 2, gas: 20000 })

// opCodes.set('0x0', new OpCode("SAD", 1, 2, 2000))

// opCodes.set('0x0', new OpCode(Instructions.STOP, 1, 2, 2000))


// opCodes.set(Instructions.STOP, new Operation(1, 2, 20000))

// opCodes.set(STOP, { inputs: 1, outputs: 2, gasCost: 20000 })


//{ mnemonic: "SAD", input: 1, output: 2, gas: 20000 })

/* ============ Range ============ */

//# schema: [opcode, ins, outs, gas]


// https://github.com/CoinCulture/evm-tools/blob/master/analysis/guide.md


// Value, Mnemonic, Inputs, Outputs, Gas, Subset (Zero, very low, low), Operations (Or formula) -> Could be a function

// for instance, ADD, (a, b) => returns a + b 

// Phases
// 1. Input string
// 2. Input smart contract => I should compile, generate bytecode and then disassemble


// maybe inside ADD and STOP, I can use STOP.toString();

// opcode -> mnemonic, gas, input, output

// #schema: [opcode, ins, outs, gas]

// import { ADD, STOP } from "./instructions";

// isPush
// isStaticJump 