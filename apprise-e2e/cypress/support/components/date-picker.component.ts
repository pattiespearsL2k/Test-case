import { TIME_FORMAT } from '@constants/common.constant';
import * as moment from 'moment';
import { BaseDatePicker } from './base-date-picker.component';

class DatePicker extends BaseDatePicker {
    private getDate(time: string) {
        const timeFormat = TIME_FORMAT;
        if (!moment(time, timeFormat, true).isValid()) throw new Error('The time is incorrect format');
        const year = moment(time, timeFormat).year();
        const month = moment(time, timeFormat).month() + 1;
        const day = moment(time, timeFormat).date();
        return [year, month, day];
    }

    selectYear(year: number, index: number) {
        this.getHeaderValue(index).then(($value) => {
            const yearRegex = /\d+$/g;
            const displayedYear = Number(yearRegex.exec($value.text().trim()));
            if (displayedYear === year) return;
            else {
                cy.wait(200);
                if (displayedYear > year) this.getBackBTN(index).click();
                else {
                    this.getNextBTN(index).click();
                }
                this.selectYear(year, index);
            }
        });
    }

    selectMonth(month: number, index: number) {
        const monthNames: string[] = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        this.getHeaderValue(index).then(($value) => {
            const displayedMonth =
                monthNames.indexOf(
                    String(
                        $value
                            .text()
                            .trim()
                            .replace(/[^a-zA-Z]+/g, '')
                    )
                ) + 1;
            if (displayedMonth === month) return;
            else {
                if (displayedMonth > month) this.getBackBTN(index).click();
                else {
                    this.getNextBTN(index).click();
                }
                cy.window().its('document.readyState').should('equal', 'complete');
                this.selectMonth(month, index);
            }
        });
    }

    selectDay(day: number, index: number) {
        this.getDay(day, index).click();
    }

    selectTime(time: string, index: number = 0) {
        const [year, month, day] = this.getDate(time);
        cy.log(String(year), String(month), String(day));
        this.selectYear(year, index);
        this.selectMonth(month, index);
        this.selectDay(day, index);
    }

    verifyDatesAreDisabledBeforeDate(time: string, index: number) {
        const [year, month, day] = this.getDate(time);
        let dateIndex: number[] = [];
        let lastIndex: number;
        cy.log(String(year), String(month), String(day));
        this.selectYear(year, index);
        this.selectMonth(month, index);
        this.getDays(index)
            .each((ele, i) => {
                dateIndex.push(i);
                if (ele.text() === String(day) && !ele.attr('class').includes('not-current-month')) {
                    lastIndex = i;
                }
            })
            .then((ele) => {
                dateIndex = dateIndex.slice(0, lastIndex);
                dateIndex.forEach((i) => expect(ele[i].getAttribute('class')).include('disabled'));
            });
    }

    verifyDatesAreDisabledAfterDate(time: string, index: number) {
        const [year, month, day] = this.getDate(time);
        let dateIndex: number[] = [];
        let firstIndex: number;
        cy.log(String(year), String(month), String(day));
        this.selectYear(year, index);
        this.selectMonth(month, index);
        this.getDays(index)
            .each((ele, i) => {
                dateIndex.push(i);
                if (ele.text() === String(day) && !ele.attr('class').includes('not-current-month')) {
                    firstIndex = i;
                }
            })
            .then((ele) => {
                dateIndex = dateIndex.slice(firstIndex + 1);
                dateIndex.forEach((i) => {
                    expect(ele[i].getAttribute('class')).include('disabled');
                });
            });
    }
}
export const datePicker = new DatePicker();
