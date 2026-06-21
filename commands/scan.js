const fs = require("fs");
const path = require("path");


const workspacePath = path.join(__dirname, "..", "workspace");



function scanWorkspace() {

    const files = fs.readdirSync(workspacePath);

    const fileDetails = [];

    files.forEach((file) => {

        const filePath = path.join(workspacePath, file);

        const stats = fs.statSync(filePath);

        const content = fs.readFileSync(filePath, "utf-8");

        const lines = content === "" ? 0 : content.split("\n").length;

        fileDetails.push({

            fileName: file,

            extension: path.extname(file),

            size: stats.size + " Bytes",

            createdAt: stats.birthtime,

            modifiedAt: stats.mtime,

            lines: lines,

            characters: content.length

        });

    });

    return fileDetails;
}




function findDuplicateFiles() {

    const files = fs.readdirSync(workspacePath);

    const duplicates = [];

    const visited = new Set();

    for (let i = 0; i < files.length; i++) {

        const firstFile = files[i];

        if (visited.has(firstFile)) {
            continue;
        }

        const firstContent = fs.readFileSync(
            path.join(workspacePath, firstFile),
            "utf-8"
        );

        for (let j = i + 1; j < files.length; j++) {

            const secondFile = files[j];

            const secondContent = fs.readFileSync(
                path.join(workspacePath, secondFile),
                "utf-8"
            );

            if (firstContent === secondContent) {

                duplicates.push({

                    original: firstFile,

                    duplicate: secondFile

                });

                visited.add(secondFile);

            }

        }

    }

    return duplicates;
}




function workspaceSummary() {

    const files = fs.readdirSync(workspacePath);

    let totalLines = 0;

    let totalCharacters = 0;

    let totalSize = 0;

    files.forEach((file) => {

        const filePath = path.join(workspacePath, file);

        const stats = fs.statSync(filePath);

        const content = fs.readFileSync(filePath, "utf-8");

        totalSize += stats.size;

        totalCharacters += content.length;

        totalLines += content === ""
            ? 0
            : content.split("\n").length;

    });

    return {

        totalFiles: files.length,

        totalLines,

        totalCharacters,

        totalSize: totalSize + " Bytes"

    };

}



module.exports = {

    scanWorkspace,

    findDuplicateFiles,

    workspaceSummary

};