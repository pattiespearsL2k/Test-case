export class BaseDatePicker {
    getDatePickerComponent(index: number) {
        return cy.get('.mx-datepicker-main.mx-datepicker-popup').eq(index);
    }

    getBackBTN(index: number) {
        return this.getDatePickerComponent(index).find('.mx-btn.mx-btn-text.mx-btn-icon-left');
    }

    getNextBTN(index: number) {
        return this.getDatePickerComponent(index).find('.mx-btn.mx-btn-text.mx-btn-icon-right');
    }

    getHeaderValue(index: number) {
        return this.getDatePickerComponent(index).find('.mx-calendar-header-label');
    }

    getDay(day: number, index: number) {
        return this.getDatePickerComponent(index).contains('td[class="cell"]:not(td[class*="disabled"])', String(day));
    }

    getDays(index: number) {
        return this.getDatePickerComponent(index).find('td[class*=cell]');
    }
}
