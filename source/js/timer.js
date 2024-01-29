const initTimer = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const hoursDisplay = document.querySelectorAll('.timer__hours');
        const minutesDisplay = document.querySelectorAll('.timer__minutes');
        const secondsDisplay = document.querySelectorAll('.timer__seconds');

        let hours = 0;
        let minutes = 30;
        let seconds = 0;

        const updateDisplay = () => {
            hoursDisplay.forEach(display => {
                display.textContent = hours.toString().padStart(2, '0');
            });
            minutesDisplay.forEach(display => {
                display.textContent = minutes.toString().padStart(2, '0');
            });
            secondsDisplay.forEach(display => {
                display.textContent = seconds.toString().padStart(2, '0');
            });
        };

        const startCountdown = () => {
            if (hours === 0 && minutes === 0 && seconds === 0) {
                hours = 0;
                minutes = 30;
                seconds = 0;
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours > 0) {
                        hours--;
                        minutes = 59;
                    }
                } else {
                    minutes--;
                }
                seconds = 59;
            } else {
                seconds--;
            }

            updateDisplay();
        };

        setInterval(startCountdown, 1000);
        updateDisplay();
    });
};

initTimer();
