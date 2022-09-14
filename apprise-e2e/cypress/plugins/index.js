/**
 * Used to setup TypeScript support in cypress
 */
const wp = require('@cypress/webpack-preprocessor');
const { getMessages, getAccessToken, checkInboxForMail } = require('./tasks-service/gmail.service');
const { writeExcelCells } = require('./tasks-service/excel.service');
const { readQRCode } = require('./tasks-service/prCode.service');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const path = require('path');

module.exports = (on) => {
    const options = {
        webpackOptions: {
            resolve: {
                extensions: ['.ts', '.tsx', '.js'],
                alias: {
                    '@pages': path.resolve(__dirname, '../../cypress/support/pages'),
                    '@commands': path.resolve(__dirname, '../../cypress/support/commands'),
                    '@components': path.resolve(__dirname, '../../cypress/support/components'),
                    '@constants': path.resolve(__dirname, '../../cypress/support/constants'),
                    '@enums': path.resolve(__dirname, '../../cypress/support/enums'),
                    '@helpers': path.resolve(__dirname, '../../cypress/support/helpers'),
                    '@intercepts': path.resolve(__dirname, '../../cypress/support/intercepts'),
                    '@languages': path.resolve(__dirname, '../../cypress/support/languages'),
                    '@fixtures': path.resolve(__dirname, '../../cypress/fixtures')
                }
            },
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        loader: 'ts-loader',
                        options: { transpileOnly: true }
                    }
                ]
            }
        }
    };
    on('task', {
        getMessages,
        getAccessToken,
        checkInboxForMail,
        writeExcelCells,
        readQRCode,
        downloadFile
    });
    on('file:preprocessor', wp(options));
};
