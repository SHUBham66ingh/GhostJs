const Table = require("cli-table3");
const chalk = require("chalk");




function displaySystemInfo(systemInfo) {

    console.log(chalk.blue.bold("\n========== SYSTEM INFORMATION ==========\n"));

    const table = new Table({
        head: [
            chalk.green("Property"),
            chalk.green("Value")
        ],
        colWidths: [25, 60]
    });

    for (const key in systemInfo) {
        table.push([key, systemInfo[key]]);
    }

    console.log(table.toString());
}




function displayEnvironmentInfo(envInfo) {

    console.log(chalk.blue.bold("\n========== ENVIRONMENT VARIABLES ==========\n"));

    const table = new Table({
        head: [
            chalk.green("Variable"),
            chalk.green("Value")
        ],
        colWidths: [25, 60]
    });

    for (const key in envInfo) {
        table.push([key, envInfo[key]]);
    }

    console.log(table.toString());
}




function displayWorkspace(files) {

    console.log(chalk.blue.bold("\n========== WORKSPACE FILES ==========\n"));

    const table = new Table({
        head: [
            "File",
            "Extension",
            "Size",
            "Lines",
            "Characters"
        ]
    });

    files.forEach(file => {

        table.push([
            file.fileName,
            file.extension,
            file.size,
            file.lines,
            file.characters
        ]);

    });

    console.log(table.toString());

}




function displaySummary(summary) {

    console.log(chalk.blue.bold("\n========== WORKSPACE SUMMARY ==========\n"));

    const table = new Table({
        head: ["Property", "Value"]
    });

    table.push(
        ["Total Files", summary.totalFiles],
        ["Total Lines", summary.totalLines],
        ["Total Characters", summary.totalCharacters],
        ["Total Size", summary.totalSize]
    );

    console.log(table.toString());

}




function displayDuplicates(duplicates) {

    console.log(chalk.blue.bold("\n========== DUPLICATE FILES ==========\n"));

    if (duplicates.length === 0) {

        console.log(chalk.green("No duplicate files found.\n"));
        return;

    }

    const table = new Table({
        head: [
            "Original File",
            "Duplicate File"
        ]
    });

    duplicates.forEach(file => {

        table.push([
            file.original,
            file.duplicate
        ]);

    });

    console.log(table.toString());

}




module.exports = {

    displaySystemInfo,

    displayEnvironmentInfo,

    displayWorkspace,

    displaySummary,

    displayDuplicates

};