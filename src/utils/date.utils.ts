import moment from "moment-jalaali";


export function changeDateToPersianLanguage(date: Date) {
    const shamsiDate = moment(date).format('jYYYY-jMM-jDD');
    const [, month, day] = shamsiDate.split('-')
    console.log('date======================>' , month,day,shamsiDate)

    let persianMonth = ''
    switch (month) {
        case '01':
            persianMonth = 'فروردین';
            break;
        case '02':
            persianMonth = 'اردیبهشت';
            break;
        case '03':
            persianMonth = 'خرداد';
            break;
        case '04':
            persianMonth = 'تیر';
            break;
        case '05':
            persianMonth = 'مرداد';
            break;
        case '06':
            persianMonth = 'شهریور';
            break;
        case '07':
            persianMonth = 'مهر';
            break;
        case '08':
            persianMonth = 'آبان';
            break;
        case '09':
            persianMonth = 'آدر';
            break;
        case '10':
            persianMonth = 'دی';
            break;
        case '11':
            persianMonth = 'بهمن';
            break;
        case '12':
            persianMonth = 'اسفند';
            break;
        default :
        persianMonth=''
        break;
    }

    return `${Number(day)} ${persianMonth}`
}