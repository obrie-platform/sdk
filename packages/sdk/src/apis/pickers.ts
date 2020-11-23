import {sendAndReceive} from "../uimanager";

export interface DatePickerOptions {
    initialDate?: Date;
    firstDate?: Date;
    lastDate?: Date;
    currentDate?: Date;
}

export interface DateRangePickerOptions {
    initialDateRange?: DateRange;
    firstDate?: Date;
    lastDate?: Date;
    currentDate?: Date;
}

export interface DateRange {
    start: Date;
    end: Date;
}

export async function showDatePicker(options: DatePickerOptions): Promise<Date> {
    const result = await sendAndReceive<string>('showDatePicker', null, options)

    return new Date(result)
}

export async function showDateRangePicker(options: DateRangePickerOptions): Promise<DateRange> {
    const { start, end } = await sendAndReceive<{ start: string, end: string }>('showDateRangePicker', null, options)

    return {
        start: new Date(start),
        end: new Date(end)
    }
}
