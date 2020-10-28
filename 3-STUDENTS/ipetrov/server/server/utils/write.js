const fs = require('fs');

module.exports = async (fileUrl, data) => {
    try {
        let data = await fs.readFileSync('', 'UTF-8')
        await fs.writeFile(fileUrl, JSON.stringify(data, null, ' '), err => { });
        return true
    }

    catch(err) {
        return false
    }
}