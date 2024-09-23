// date-time-picker.ts
import 'bootstrap-datetime-picker';

document.addEventListener('DOMContentLoaded', () => {
    const startDateInput = document.getElementById('date-start') as HTMLInputElement;
    const endDateInput = document.getElementById('date-end') as HTMLInputElement;

    if (startDateInput && endDateInput) {
        $(startDateInput).datetimepicker({
            format: 'YYYY-MM-DD HH:mm',
            icons: {
                time: 'fas fa-clock',
                date: 'fas fa-calendar',
                up: 'fas fa-chevron-up',
                down: 'fas fa-chevron-down',
                previous: 'fas fa-chevron-left',
                next: 'fas fa-chevron-right',
                today: 'fas fa-calendar-check-o',
                clear: 'fas fa-trash',
                close: 'fas fa-times'
            }
        });

        $(endDateInput).datetimepicker({
            format: 'YYYY-MM-DD HH:mm',
            useCurrent: false
        });

        $(startDateInput).on("dp.change", (e: any) => {
            $(endDateInput).data("DateTimePicker").minDate(e.date);
        });

        $(endDateInput).on("dp.change", (e: any) => {
            $(startDateInput).data("DateTimePicker").maxDate(e.date);
        });
    }
});