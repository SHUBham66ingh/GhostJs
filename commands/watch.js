const fs = require("fs");
const path = require("path");

const workspacePath = path.join(__dirname, "..", "workspace");

// Create workspace if it doesn't exist
if (!fs.existsSync(workspacePath)) {
    fs.mkdirSync(workspacePath, { recursive: true });
}

function watchWorkspace() {
    try {
        console.log("=================================");
        console.log(" Watching Workspace...");
        console.log(" Press CTRL + C to stop.");
        console.log("=================================\n");

        const watcher = fs.watch(workspacePath, (eventType, fileName) => {
            try {
                if (!fileName) {
                    console.log("A filesystem change was detected.");
                    return;
                }

                const filePath = path.join(workspacePath, fileName);

                if (eventType === "rename") {
                    if (fs.existsSync(filePath)) {
                        if (fs.statSync(filePath).isFile()) {
                            console.log(`📁 File Created : ${fileName}`);
                        } else {
                            console.log(`📂 Directory Created : ${fileName}`);
                        }
                    } else {
                        console.log(`🗑️  File Deleted : ${fileName}`);
                    }
                }

                else if (eventType === "change") {
                    if (fs.existsSync(filePath)) {
                        if (fs.statSync(filePath).isFile()) {
                            console.log(`✏️  File Modified : ${fileName}`);
                        }
                    }
                }

                else {
                    console.log(`Unknown Event (${eventType}) : ${fileName}`);
                }

            } catch (err) {
                console.error("Watch Event Error:", err.message);
            }
        });

        watcher.on("error", (err) => {
            console.error("Watcher Error:", err.message);
        });

        return watcher;

    } catch (err) {
        console.error("Unable to watch workspace:", err.message);
        return null;
    }
}

module.exports = {
    watchWorkspace
};