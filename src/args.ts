import commandLineArgs from "command-line-args";

export interface OptionValues {
    bytecode: string;
    // Other properties? Maybe OptionValues
}

export const parseArgs = (): OptionValues => {
    const optionDefinitions = [
        { name: "bytecode", type: String, defaultOption: true }
    ];

    const rawOptions = commandLineArgs(optionDefinitions);

    return {
        bytecode: rawOptions.bytecode
    };
};

// como usar decorators en JS/TS? It would be nice to execute validation of inputs using decorators