const fs = require("fs");
const registarMiddleware = (req, res, next) => {
    const log_path = process.env.LOG_PATH

    const dateTime = new Date();
    const endpoint = req.originalUrl;

    const log = `${dateTime} . ${endpoint}\n`;

    fs.appendFile(`${log_path}/acessos.log`, log, () =>{});

    next();
}
module.exports = registarMiddleware;