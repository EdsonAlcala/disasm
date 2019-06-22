import { parseArgs } from "./args";

export const run = async () => {
    // show script introduction
    // ask questions
    // create the file
    // show success message
    const options = parseArgs();
    console.log("CLI is running");
    console.log("Arguments", options);
};