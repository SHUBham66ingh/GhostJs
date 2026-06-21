
const os = require("os");



function getSystemInfo() {
    try {
        const cpus = os.cpus();

        return {
            hostname: safeValue(os.hostname()),
            platform: safeValue(os.platform()),
            osType: safeValue(os.type()),
            osRelease: safeValue(os.release()),
            architecture: safeValue(os.arch()),

            nodeVersion: process.version,

            cpuModel:
                cpus.length > 0
                    ? safeValue(cpus[0].model)
                    : "Unavailable",

            cpuCores: cpus.length,

            totalMemory: formatBytes(os.totalmem()),
            freeMemory: formatBytes(os.freemem()),

            homeDirectory: safeValue(os.homedir()),

            username: getUsername(),

            uptime: formatUptime(os.uptime())
        };
    } catch (err) {
        return {
            error: err.message
        };
    }
}



function formatBytes(bytes) {
    if (typeof bytes !== "number" || bytes < 0) {
        return "0 Bytes";
    }

    const units = ["Bytes", "KB", "MB", "GB", "TB", "PB"];

    let size = bytes;
    let index = 0;

    while (size >= 1024 && index < units.length - 1) {
        size /= 1024;
        index++;
    }

    return `${size.toFixed(2)} ${units[index]}`;
}



function formatUptime(seconds) {
    if (typeof seconds !== "number" || seconds < 0) {
        return "0 Days 0 Hours 0 Minutes";
    }

    const days = Math.floor(seconds / 86400);

    seconds %= 86400;

    const hours = Math.floor(seconds / 3600);

    seconds %= 3600;

    const minutes = Math.floor(seconds / 60);

    const secs = Math.floor(seconds % 60);

    return `${days} Days ${hours} Hours ${minutes} Minutes ${secs} Seconds`;
}



function getUsername() {
    try {
        return safeValue(os.userInfo().username);
    } catch {
        return "Unavailable";
    }
}



function safeValue(value) {
    if (
        value === undefined ||
        value === null ||
        value === ""
    ) {
        return "Unavailable";
    }

    return value;
}

module.exports = {
    getSystemInfo
};