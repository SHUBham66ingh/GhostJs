const { getSystemInfo } = require("./commands/systemInfo");
const { getEnvironmentInfo } = require("./commands/envInfo");
const { watchWorkspace } = require("./commands/watch");
const { generateReport } = require("./commands/report");
const report = generateReport();


const systemInfo = getSystemInfo();
const envInfo = getEnvironmentInfo();


const {
    displaySystemInfo,
    displayEnvironmentInfo
} = require("./commands/dashboard");



const {
    scanWorkspace,
    findDuplicateFiles,
    workspaceSummary
} = require("./commands/scan");

console.log("========== FILE DETAILS ==========");

console.log(scanWorkspace());

console.log("\n========== SUMMARY ==========");

console.log(workspaceSummary());

console.log("\n========== DUPLICATES ==========");

console.log(findDuplicateFiles());


const {
    createFile,
    readFile,
    updateFile,
    deleteFile,
    renameFile,
    listFiles
} = require("./commands/crud");

console.log(createFile("demo.js", "console.log('Hello World');"));

console.log(readFile("demo.js"));

console.log(updateFile("demo.js", "console.log('Updated');"));

console.log(renameFile("demo.js", "app.js"));

console.log(listFiles());

console.log(deleteFile("app.js"));

console.log(listFiles())
console.log("===== SYSTEM INFORMATION =====");
console.log(systemInfo);

console.log("\n===== ENVIRONMENT VARIABLES =====");
console.log(envInfo);


watchWorkspace();



displaySystemInfo(getSystemInfo());

displayEnvironmentInfo(getEnvironmentInfo());

console.log(report);