import chalk from "chalk"

import { parseArgs } from "./args";
import { opCodeMap } from "./opcodes";

const log = console.log;

export const run = async () => {
    // show script introduction
    // ask questions
    // create the file
    // show success message

    // validate it needs to be module of 2 -> bytecode % 2 == 0 -> Or it is wrong
    // if (code.length % 2 !== 0) {
    // throw new Error(`disassembleBytecode - Bad input, bytecode length not even: ${code}, length: ${code.length}`)
    //}

    //  in theory if it is a push, the treatment should be different.. why?
    //  I guess I better check directly the opcode table, in case they have inputs.. or something
    // once it is disassembled I can store in a temporal array, is that correct? i don't know, but I can start with it
    // also, I think that from a functional point of view, i could use a different approach, execute whole validations
    // then pipes 
    // anyways
    // I also need a dictionary
    const options = parseArgs();
    log(chalk.green('EVM Disassembler'))
    // log("Bytecode", options.bytecode);
    const bytecodeInBytes = options.bytecode.match(/(..?)/g);
    // log("Bytecode in bytes", bytecodeInBytes)
    if (!bytecodeInBytes) { // TODO: Improve this abstraction
        throw new Error("Invalid bytecode")
    }
    bytecodeInBytes.forEach(element => {
        const result = opCodeMap.get(element);
        console.log(`0001  -  0x${element}  -  ${result.mnemonic}`)
    });
};

// PC Counter - Mnemonic - Argument