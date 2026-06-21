const fs = require("fs");
const path = require("path");

const workspacePath = path.join(__dirname, "..", "workspace");


if (!fs.existsSync(workspacePath)) {
    fs.mkdirSync(workspacePath, { recursive: true });
}


function validateFileName(fileName) {
    return (
        typeof fileName === "string" &&
        fileName.trim() !== ""
    );
}


function getSafePath(fileName) {
    if (!validateFileName(fileName)) {
        throw new Error("Invalid file name!");
    }

    const filePath = path.resolve(workspacePath, fileName);

    if (!filePath.startsWith(workspacePath)) {
        throw new Error("Invalid file path!");
    }

    return filePath;
}

// -------------------- CREATE --------------------

function createFile(fileName, content = "") {
    try {
        const filePath = getSafePath(fileName);

        if (fs.existsSync(filePath)) {
            return "File already exists!";
        }

        // Create parent directories if needed
        fs.mkdirSync(path.dirname(filePath), {
            recursive: true,
        });

        fs.writeFileSync(filePath, content);

        return "File created successfully!";
    } catch (err) {
        return err.message;
    }
}

// -------------------- READ --------------------

function readFile(fileName) {
    try {
        const filePath = getSafePath(fileName);

        if (!fs.existsSync(filePath)) {
            return "File not found!";
        }

        if (!fs.statSync(filePath).isFile()) {
            return "Not a file!";
        }

        return fs.readFileSync(filePath, "utf8");
    } catch (err) {
        return err.message;
    }
}

// -------------------- UPDATE --------------------

function updateFile(fileName, newContent = "") {
    try {
        const filePath = getSafePath(fileName);

        if (!fs.existsSync(filePath)) {
            return "File not found!";
        }

        if (!fs.statSync(filePath).isFile()) {
            return "Not a file!";
        }

        fs.writeFileSync(filePath, newContent);

        return "File updated successfully!";
    } catch (err) {
        return err.message;
    }
}

// -------------------- DELETE --------------------

function deleteFile(fileName) {
    try {
        const filePath = getSafePath(fileName);

        if (!fs.existsSync(filePath)) {
            return "File not found!";
        }

        if (!fs.statSync(filePath).isFile()) {
            return "Not a file!";
        }

        fs.unlinkSync(filePath);

        return "File deleted successfully!";
    } catch (err) {
        return err.message;
    }
}

// -------------------- RENAME --------------------

function renameFile(oldName, newName) {
    try {
        const oldPath = getSafePath(oldName);
        const newPath = getSafePath(newName);

        if (!fs.existsSync(oldPath)) {
            return "File not found!";
        }

        if (!fs.statSync(oldPath).isFile()) {
            return "Not a file!";
        }

        if (oldPath === newPath) {
            return "No changes needed!";
        }

        if (fs.existsSync(newPath)) {
            return "Target file already exists!";
        }

        fs.mkdirSync(path.dirname(newPath), {
            recursive: true,
        });

        fs.renameSync(oldPath, newPath);

        return "File renamed successfully!";
    } catch (err) {
        return err.message;
    }
}

// -------------------- LIST --------------------

function listFiles() {
    try {
        return fs.readdirSync(workspacePath).filter((item) => {
            const itemPath = path.join(workspacePath, item);
            return fs.statSync(itemPath).isFile();
        });
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    createFile,
    readFile,
    updateFile,
    deleteFile,
    renameFile,
    listFiles,
};