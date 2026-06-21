const fs = require("fs");
const path = require("path");

const { getSystemInfo } = require("./systemInfo");
const { getEnvironmentInfo } = require("./envInfo");
const {
    scanWorkspace,
    workspaceSummary,
    findDuplicateFiles
} = require("./scan");


function getCurrentDateTime() {

    const now = new Date();

    return {
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString()
    };

}


const reportsPath = path.join(__dirname, "..", "reports");


if (!fs.existsSync(reportsPath)) {
    fs.mkdirSync(reportsPath);
}

function generateReport() {

    const dateTime = getCurrentDateTime();

    const report = {

        generatedOn: {

            date: dateTime.date,

            time: dateTime.time

        },

        systemInformation: getSystemInfo(),

        environmentVariables: getEnvironmentInfo(),

        workspaceSummary: workspaceSummary(),

        workspaceFiles: scanWorkspace(),

        duplicateFiles: findDuplicateFiles()

    };

    const fileName = `report-${Date.now()}.json`;

    const filePath = path.join(reportsPath, fileName);

    fs.writeFileSync(
        filePath,
        JSON.stringify(report, null, 4)
    );

    return {

        message: "Report generated successfully.",

        location: filePath

    };

}

module.exports = {

    generateReport

};