const path = require('path');
const gmail = require('gmail-tester');
const moment = require('moment');
const credentialsPath = path.resolve(__dirname, '../credential/credentials_gmail.json');
const tokenPath = path.resolve(__dirname, '../credential/token_gmail.json');

module.exports = {
    async getMessages(args) {
        const [from, to, subject, attachmentStatus] = args;
        let message;
        try {
            message = await gmail.get_messages(credentialsPath, tokenPath, {
                subject: subject,
                from: from,
                to: to,
                include_body: true,
                include_attachments: attachmentStatus
            });
            return message[0].body;
        } catch (err) {
            console.error(err);
            return;
        }
    },

    async checkInboxForMail(args) {
        const [subject, to] = args;
        let email;
        try {
            email = await gmail.check_inbox(credentialsPath, tokenPath, {
                subject: subject,
                to: to,
                wait_time_sec: 10,
                after: moment().subtract(2, 'minute').toDate(),
                max_wait_time_sec: 60,
                include_body: true
            });
            return email;
        } catch (err) {
            console.error(err);
            return;
        }
    },

    async getAccessToken() {
        try {
            await gmail.refresh_access_token(credentialsPath, tokenPath);
        } catch (err) {
            console.error(err);
            return;
        }
        return null;
    }
};
