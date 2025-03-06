// Напишите функцию, которая принимает дату начала и дату окончания события, а также список других событий, происходящих в календаре, и проверяет, пересекается ли новое событие с существующими. Используйте объект Date для работы с датами и временем.

const events = []

const checkIntersection = (dateStart, dateEnd) => {
    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        if (dateStart < event.dateEnd && dateEnd > event.dateStart) {
            return true;
        }
    }
    return false
}

const addEvent = (dateStart, dateEnd, event) => {
    let date1 = new Date(dateStart);
    let date2 = new Date(dateEnd);
    if (date1 > date2) {
        // console.log('Дата начала события должна быть меньше даты окончания');
        // return;
        [date2, date1] = [date1, date2];
    }

    if (checkIntersection(date1, date2)) {
        console.log('Событие пересекается с другим событием');
        return;
    }

    events.push({
        dateStart: date1,
        dateEnd: date2,
        event: event
    })
}

addEvent('2025-03-10', '2025-03-15', 'event1');
addEvent('2025-03-20', '2025-03-25', 'event2');
addEvent('2025-03-30', '2025-04-05', 'event3');
addEvent('2025-03-31', '2025-04-04', 'event4');
addEvent('2021-04-30', '2021-03-04', 'event5');
addEvent('2025-01-31', '2025-05-04', 'event6');

console.log(events);