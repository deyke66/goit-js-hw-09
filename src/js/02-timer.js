import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const refs = {
  pickrInput: document.querySelector('#datetime-picker'),
  startTimerButton: document.querySelector('button[data-start]'),
  daysDateValue: document.querySelector('.value[data-days]'),
  hourseDateValue: document.querySelector('.value[data-hours]'),
  minutesDateValue: document.querySelector('.value[data-minutes]'),
  secondsDateValue: document.querySelector('.value[data-seconds]')
}

const { pickrInput, startTimerButton, daysDateValue, hourseDateValue, minutesDateValue, secondsDateValue } = refs;

startTimerButton.disabled = true;

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (Date.now() > selectedDates[0]) {
      window.alert('Please choose a date in the future');
      return
    }
    startTimerButton.disabled = false;

    // const userDate = selectedDates[0].getTime();
    
    startTimerButton.addEventListener('click', () => {
       timerId = setInterval(() => {
        // const trueDate = Date.now()
        const timeRemaining = selectedDates[0].getTime() - Date.now()
        const { days, hours, minutes, seconds } = convertMs(timeRemaining);
        daysDateValue.textContent = addLeadingZero(days)
        hourseDateValue.textContent = addLeadingZero(hours)
        minutesDateValue.textContent = addLeadingZero(minutes);
         secondsDateValue.textContent = addLeadingZero(seconds);
         console.log(timeRemaining)
        if (timeRemaining<=0) {
          clearInterval(timerId)
         }
         
      }, 1000);
    });
    

  },
};

flatpickr(pickrInput, options)

function addLeadingZero(value){
  return value.toString().padStart(2, '0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
