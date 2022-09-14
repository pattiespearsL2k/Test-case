export class UtilsHelper {
    getPercentageStatic(percentage: number) {
        return String(`${Number(percentage).toFixed(2)}%`);
    }
}
export const utilsHelper = new UtilsHelper();
