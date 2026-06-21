
function getEnvironmentInfo() {

    return {

        PATH: process.env.PATH || "Not Available",

        HOME: process.env.HOME || "Not Available",

        USERPROFILE: process.env.USERPROFILE || "Not Available",

        TEMP: process.env.TEMP || "Not Available",

        USERNAME: process.env.USERNAME || "Not Available",

        COMPUTERNAME: process.env.COMPUTERNAME || "Not Available",

        SHELL: process.env.SHELL || "Not Available",

        LANG: process.env.LANG || "Not Available"
    };

}


module.exports = {
    getEnvironmentInfo
};