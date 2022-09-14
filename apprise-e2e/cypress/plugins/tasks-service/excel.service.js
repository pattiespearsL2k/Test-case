const Excel = require('exceljs');

module.exports = {
    async writeExcelCells({ file, sheet, rowIndex, values }) {
        // eg: ['fixtures/file.xlsx', 'sheet-name', row, [['A', 123], ['B', 'abc']]]
        try {
            let workbook = new Excel.Workbook();
            await workbook.xlsx.readFile(file);
            const worksheet = workbook.getWorksheet(sheet);

            values.forEach(([address, value]) => {
                const row = worksheet.getRow(rowIndex);
                row.getCell(address).value = value;
                row.commit();
            });
            await workbook.xlsx.writeFile(file);
        } catch (err) {
            console.error(err);
        }
        return null;
    }
};
