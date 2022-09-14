import { TIME_FORMAT } from '@constants/common.constant';
import * as moment from 'moment';

class DateTimeHelper {
    getDateBefore(day: number): string {
        if (day) return moment(new Date()).subtract(day, 'day').format(TIME_FORMAT);
    }

    getDateAfter(day: number): string {
        if (day) return moment(new Date()).add(day, 'day').format(TIME_FORMAT);
    }

    convertFromTimeStamp(timeStamp: number): string {
        return moment.unix(timeStamp).format(TIME_FORMAT);
    }

    getTimeStamp() {
        return new Date().getTime();
    }
}
export const dateTimeHelper = new DateTimeHelper();
