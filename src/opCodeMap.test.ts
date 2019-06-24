import { OpCodeMap } from "./opCodeMap";

describe('OpCodeMap tests', () => {
    let opCodeMap: OpCodeMap;

    describe('set/get', () => {

        const TEST_OPCODE = '0x01';

        beforeEach(() => {
            opCodeMap = new OpCodeMap();
        })

        it('should set/get the opcode definition', () => {
            opCodeMap.set(TEST_OPCODE, "TEST", 1, 1, 1);

            const result = opCodeMap.get('01');

            expect(result).toBeDefined()
            expect(result).toHaveProperty('inputs')
            expect(result).toHaveProperty('outputs')
            expect(result).toHaveProperty('gasCost')
            expect(result).toHaveProperty('mnemonic')
        })


        it('should throw an error if the opcode was set before', () => {
            opCodeMap.set(TEST_OPCODE, "TEST", 1, 1, 1);

            const result = opCodeMap.get('01');

            expect(result).toBeDefined()
            expect(result).toHaveProperty('inputs')
            expect(result).toHaveProperty('outputs')
            expect(result).toHaveProperty('gasCost')
            expect(result).toHaveProperty('mnemonic')

            try {
                opCodeMap.set(TEST_OPCODE, "TEST", 1, 1, 1);
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toEqual('OpCode already set 0x01')
            }
        })

        it('should throw an error if the opcode doesn"t exists', () => {
            try {
                const result = opCodeMap.get('02');
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toEqual('OpCode doesn\'t exist 02')
            }
        })
    })
})