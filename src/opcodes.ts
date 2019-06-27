/**
 *  @Developer
 *  @Schema [opCode, mnemonic, inputs, outputs, gasCost]
 *  */

import { OpCodeMap } from "./opCodeMap";

export const opCodeMap: OpCodeMap = new OpCodeMap();

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

opCodeMap.set('0x10', "LT", 2, 1, 3);         // Less-than comparison
opCodeMap.set('0x11', "GT", 2, 1, 3);         // Greater-than comparison
opCodeMap.set('0x12', "SLT", 2, 1, 3);        // Signed less-than comparison
opCodeMap.set('0x13', "SGT", 2, 1, 3);        // Signed greater-than comparison
opCodeMap.set('0x14', "EQ", 2, 1, 3);         // Equality comparison
opCodeMap.set('0x15', "ISZERO", 1, 1, 3);     // Simple not operator. TODO: is it a simple not operator?	
opCodeMap.set('0x16', "AND", 2, 1, 3);        // Bitwise AND operation
opCodeMap.set('0x17', "OR", 2, 1, 3);         // Bitwise OR operation
opCodeMap.set('0x18', "XOR", 2, 1, 3);        // Bitwise XOR operation
opCodeMap.set('0x19', "NOT", 1, 1, 3);        // Bitwise NOT operation
opCodeMap.set('0x1a', "BYTE", 2, 1, 3);       // Retrieve single byte from word

/* ============ 20s: SHA3 ============ */

opCodeMap.set('0x2a', "SHA3", 2, 1, 3);       // TODO: Gas cost is dynamic Compute Keccak-256 hash

/* ============ 30s: Environmental Information ============ */

opCodeMap.set('0x30', "ADDRESS", 0, 1, 2);        // Get address of currently executing account
opCodeMap.set('0x31', "BALANCE", 1, 1, 400);      // Get balance of the given account.
opCodeMap.set('0x32', "ORIGIN", 0, 1, 2);         // Get execution origination address
opCodeMap.set('0x33', "CALLER", 0, 1, 2);         // Get caller address
opCodeMap.set('0x34', "CALLVALUE", 0, 1, 2);      // Get deposited value by the instruction/transaction responsible for this execution.
opCodeMap.set('0x35', "CALLDATALOAD", 1, 1, 3);   // Get input data of current environment
opCodeMap.set('0x36', "CALLDATASIZE", 0, 1, 2);   // Get size of input data in current
opCodeMap.set('0x37', "CALLDATACOPY", 3, 0, 3);   // TODO gas cost  is dynamic Copy input data in current environment to memory
opCodeMap.set('0x38', "CODESIZE", 0, 1, 3);       // Get size of code running in current environment
opCodeMap.set('0x39', "CODECOPY", 3, 0, 3);       // TODO gas cost is dynamic Copy code running in current environment to memory
opCodeMap.set('0x3a', "GASPRICE", 0, 1, 2);       // Get price of gas in current environment
opCodeMap.set('0x3b', "EXTCODESIZE", 1, 1, 700);  // Get size of an account’s code
opCodeMap.set('0x3c', "EXTCODECOPY", 4, 0, 700);  // TODO gas cost is dynamic Copy an account’s code to memory
opCodeMap.set('0x3d', "RETURNDATASIZE", 0, 1, 3); // TODO gas cost is dynamicGet size of output data from the previous call from the current environment
opCodeMap.set('0x3e', "RETURNDATACOPY", 3, 0, 3); // TODO gas cost is dynamic Copy output data from the previous call to memory

/* ============ 40s: Block Information ============ */

opCodeMap.set('0x40', "BLOCKHASH", 1, 1, 20);  // Get the hash of one of the 256 most recent complete blocks
opCodeMap.set('0x41', "COINBASE", 0, 1, 2);    // Get the block’s beneficiary address
opCodeMap.set('0x42', "TIMESTAMP", 0, 1, 2);   // Get the block’s timestamp
opCodeMap.set('0x43', "NUMBER", 0, 1, 2);      // Get the block’s number
opCodeMap.set('0x43', "DIFFICULTY", 0, 1, 2);  // Get the block’s difficulty
opCodeMap.set('0x45', "GASLIMIT", 0, 1, 2);    // Get the block’s gas limit

/* ============ 50s: Stack, Memory, Storage and Flow Operations ============ */

opCodeMap.set('0x50', "POP", 1, 0, 2);        // Remove item from stack
opCodeMap.set('0x51', "MLOAD", 1, 1, 3);      // Load word from memory
opCodeMap.set('0x52', "MSTORE", 2, 0, 3);     // Save word to memory.
opCodeMap.set('0x53', "MSTORE8", 2, 0, 3);    // Save byte to memory
opCodeMap.set('0x54', "SLOAD", 1, 1, 200);    // Load word from storage
opCodeMap.set('0x55', "SSTORE", 2, 0, 3);     // TODO gas cost is dynamic Save word to storage
opCodeMap.set('0x56', "JUMP", 1, 0, 8);       // Alter the program counter
opCodeMap.set('0x57', "JUMPI", 2, 0, 10);     // Conditionally alter the program counter
opCodeMap.set('0x58', "PC", 0, 1, 2);         // Get the value of the program counter prior to the increment corresponding to this instruction.
opCodeMap.set('0x59', "MSIZE", 0, 1, 2);      // Get the size of active memory in bytes
opCodeMap.set('0x5a', "GAS", 0, 1, 2);        // Get the amount of available gas, including the corresponding reduction for the cost of this instruction
opCodeMap.set('0x5b', "JUMPDEST", 0, 0, 1);   // Mark a valid destination for jumps

/* ============ 60s & 70s: Push Operations ============ */

opCodeMap.set('0x60', "PUSH1", 0, 1, 3);      // Place a 1-byte item on the stack
opCodeMap.set('0x61', "PUSH2", 0, 1, 3);      // Place a 2-byte item on the stack
opCodeMap.set('0x62', "PUSH3", 0, 1, 3);      // Place a 3-byte item on the stack
opCodeMap.set('0x63', "PUSH4", 0, 1, 3);      // Place a 4-byte item on the stack
opCodeMap.set('0x64', "PUSH5", 0, 1, 3);      // Place a 5-byte item on the stack
opCodeMap.set('0x65', "PUSH6", 0, 1, 3);      // Place a 6-byte item on the stack
opCodeMap.set('0x66', "PUSH7", 0, 1, 3);      // Place a 7-byte item on the stack
opCodeMap.set('0x67', "PUSH8", 0, 1, 3);      // Place a 8-byte item on the stack
opCodeMap.set('0x68', "PUSH9", 0, 1, 3);      // Place a 9-byte item on the stack
opCodeMap.set('0x69', "PUSH10", 0, 1, 3);     // Place a 10-byte item on the stack
opCodeMap.set('0x6a', "PUSH11", 0, 1, 3);     // Place a 11-byte item on the stack
opCodeMap.set('0x6b', "PUSH12", 0, 1, 3);     // Place a 12-byte item on the stack
opCodeMap.set('0x6c', "PUSH13", 0, 1, 3);     // Place a 13-byte item on the stack
opCodeMap.set('0x6d', "PUSH14", 0, 1, 3);     // Place a 14-byte item on the stack
opCodeMap.set('0x6e', "PUSH15", 0, 1, 3);     // Place a 15-byte item on the stack
opCodeMap.set('0x6f', "PUSH16", 0, 1, 3);     // Place a 16-byte item on the stack
opCodeMap.set('0x70', "PUSH17", 0, 1, 3);     // Place a 17-byte item on the stack
opCodeMap.set('0x71', "PUSH18", 0, 1, 3);     // Place a 18-byte item on the stack
opCodeMap.set('0x72', "PUSH19", 0, 1, 3);     // Place a 19-byte item on the stack
opCodeMap.set('0x73', "PUSH20", 0, 1, 3);     // Place a 20-byte item on the stack
opCodeMap.set('0x74', "PUSH21", 0, 1, 3);     // Place a 21-byte item on the stack
opCodeMap.set('0x75', "PUSH22", 0, 1, 3);     // Place a 22-byte item on the stack
opCodeMap.set('0x76', "PUSH23", 0, 1, 3);     // Place a 23-byte item on the stack
opCodeMap.set('0x77', "PUSH24", 0, 1, 3);     // Place a 24-byte item on the stack
opCodeMap.set('0x78', "PUSH25", 0, 1, 3);     // Place a 25-byte item on the stack
opCodeMap.set('0x79', "PUSH26", 0, 1, 3);     // Place a 26-byte item on the stack
opCodeMap.set('0x7a', "PUSH27", 0, 1, 3);     // Place a 27-byte item on the stack
opCodeMap.set('0x7b', "PUSH28", 0, 1, 3);     // Place a 28-byte item on the stack
opCodeMap.set('0x7c', "PUSH29", 0, 1, 3);     // Place a 29-byte item on the stack
opCodeMap.set('0x7d', "PUSH30", 0, 1, 3);     // Place a 30-byte item on the stack
opCodeMap.set('0x7e', "PUSH31", 0, 1, 3);     // Place a 31-byte item on the stack
opCodeMap.set('0x7f', "PUSH32", 0, 1, 3);     // Place a 32-byte item on the stack

/* ============ 80s: Duplication Operations ============ */

opCodeMap.set('0x80', "DUP1", 1, 2, 3);       // Duplicate the 1st item in the stack
opCodeMap.set('0x81', "DUP2", 2, 3, 3);       // Duplicate the 2st item in the stack
opCodeMap.set('0x82', "DUP3", 3, 4, 3);       // Duplicate the 3st item in the stack
opCodeMap.set('0x83', "DUP4", 4, 5, 3);       // Duplicate the 4st item in the stack
opCodeMap.set('0x84', "DUP5", 5, 6, 3);       // Duplicate the 5st item in the stack
opCodeMap.set('0x85', "DUP6", 6, 7, 3);       // Duplicate the 6st item in the stack
opCodeMap.set('0x86', "DUP7", 7, 8, 3);       // Duplicate the 7st item in the stack
opCodeMap.set('0x87', "DUP8", 8, 9, 3);       // Duplicate the 8st item in the stack
opCodeMap.set('0x88', "DUP9", 9, 10, 3);      // Duplicate the 9st item in the stack
opCodeMap.set('0x89', "DUP10", 10, 11, 3);    // Duplicate the 10st item in the stack
opCodeMap.set('0x8a', "DUP11", 11, 12, 3);    // Duplicate the 11st item in the stack
opCodeMap.set('0x8b', "DUP12", 12, 13, 3);    // Duplicate the 12st item in the stack
opCodeMap.set('0x8c', "DUP13", 13, 14, 3);    // Duplicate the 13st item in the stack
opCodeMap.set('0x8d', "DUP14", 14, 15, 3);    // Duplicate the 14st item in the stack
opCodeMap.set('0x8e', "DUP15", 15, 16, 3);    // Duplicate the 15st item in the stack
opCodeMap.set('0x8f', "DUP16", 16, 17, 3);    // Duplicate the 16st item in the stack

/* ============ 90s: Exchange Operations ============ */

opCodeMap.set('0x90', "SWAP1", 2, 2, 3);      // Exchange the 1st and 2nd stack items
opCodeMap.set('0x91', "SWAP2", 3, 3, 3);      // Exchange the 1st and 3rd stack items
opCodeMap.set('0x92', "SWAP3", 4, 4, 3);      // Exchange the 1st and 4th stack items
opCodeMap.set('0x93', "SWAP4", 5, 5, 3);      // Exchange the 1st and 5th stack items
opCodeMap.set('0x94', "SWAP5", 6, 6, 3);      // Exchange the 1st and 6th stack items
opCodeMap.set('0x95', "SWAP6", 7, 7, 3);      // Exchange the 1st and 7th stack items
opCodeMap.set('0x96', "SWAP7", 8, 8, 3);      // Exchange the 1st and 8th stack items
opCodeMap.set('0x97', "SWAP8", 9, 9, 3);      // Exchange the 1st and 9th stack items
opCodeMap.set('0x98', "SWAP9", 10, 10, 3);    // Exchange the 1st and 10th stack items
opCodeMap.set('0x99', "SWAP10", 11, 11, 3);   // Exchange the 1st and 11th stack items
opCodeMap.set('0x9a', "SWAP11", 12, 12, 3);   // Exchange the 1st and 12th stack items
opCodeMap.set('0x9b', "SWAP12", 13, 13, 3);   // Exchange the 1st and 13th stack items
opCodeMap.set('0x9c', "SWAP13", 14, 14, 3);   // Exchange the 1st and 14th stack items
opCodeMap.set('0x9d', "SWAP14", 15, 15, 3);   // Exchange the 1st and 15th stack items
opCodeMap.set('0x9e', "SWAP15", 16, 16, 3);   // Exchange the 1st and 16th stack items
opCodeMap.set('0x9f', "SWAP16", 17, 17, 3);   // Exchange the 1st and 17th stack items

/* ============ a0s: Logging Operations ============ */

opCodeMap.set('0xa0', "LOG0", 2, 0, 375);     // Append log record with 0 topics
opCodeMap.set('0xa1', "LOG1", 3, 0, 750);     // Append log record with 1 topics
opCodeMap.set('0xa2', "LOG2", 4, 0, 1125);    // Append log record with 2 topics
opCodeMap.set('0xa3', "LOG3", 5, 0, 1500);    // Append log record with 3 topics
opCodeMap.set('0xa4', "LOG4", 6, 0, 1875);    // Append log record with 4 topics

/* ============ f0s: System operations ============ */

opCodeMap.set('0xf0', "CREATE", 3, 1, 32000);      // TODO complex gas cost Create a new account with associated code
opCodeMap.set('0xf1', "CALL", 7, 1, 700);          // TODO complex gas cost Message-call into an account
opCodeMap.set('0xf2', "CALLCODE", 7, 1, 700);      // Message-call into this account with an alternative account’s code
opCodeMap.set('0xf3', "RETURN", 2, 0, 0);          // Halt execution returning output data
opCodeMap.set('0xf4', "DELEGATECALL", 6, 1, 700);  // TODO complex gas cost Message-call into this account with an alternative account’s code, but persisting the current values for sender and value
opCodeMap.set('0xf5', "CALLBLACKBOX", 7, 1, 40);  // TODO complex gas cost Message-call into this account with an alternative account’s code, but persisting the current values for sender and value
opCodeMap.set('0xfa', "STATICCALL", 6, 1, 40);   // Static message-call into an account
opCodeMap.set('0xfd', "REVERT", 2, 0, 0);       // Halt execution reverting state changes but returning data and remaining gas
opCodeMap.set('0xfe', "INVALID", -1, -1, -1);      // TODO: N/A, I should support NA(not available)gas cost, input, output Designated invalid instruction
opCodeMap.set('0xff', "SELFDESTRUCT", 1, 0, 5000); // TODO Dinamic gas cost Halt execution and register account for later deletion

// TODO: Should I use enums for Mnemonics? 
// Should I use subsets? (zero, very, low, etc..) 

// Where should I put the implementations?
// Maybe inline in this file? ADD, 0, 1, 1, (a, b) => returns a + b 

// Phases
// 1. Input string
// 2. Input smart contract => I should compile, generate bytecode and then disassemble

// maybe inside ADD and STOP, I can use STOP.toString() ?

// Should I create an external file?
// and do something like..
// import { ADD, STOP } from "./instructions";

// Do I need helpers?
// isPush
// isStaticJump 
