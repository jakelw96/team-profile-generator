const fs = require('fs');

const writeFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'HTML generated!'
            });
        });
    });
};

const copyFile = data => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve("Page style copied successfully!");
        });
    });
};

module.exports = { writeFile, copyFile }