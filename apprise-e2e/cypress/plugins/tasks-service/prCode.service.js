const fs = require('fs');
const jimp = require('jimp');
const QrCode = require('qrcode-reader');
module.exports = {
    async readQRCode(filePath) {
        try {
            if (fs.existsSync(filePath)) {
                const img = await jimp.read(fs.readFileSync(filePath));
                const qr = new QrCode();
                const value = await new Promise((resolve, reject) => {
                    qr.callback = (err, v) => (err != null ? reject(err) : resolve(v));
                    qr.decode(img.bitmap);
                });
                return value.result;
            }
        } catch (error) {
            return error.message;
        }
    }
};
