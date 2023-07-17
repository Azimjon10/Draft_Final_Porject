            //Calendar

// Get current date
const currentDate = new Date();

// Month names
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// Get calendar elements
const calendarHeader = document.querySelector('.calendar-header');
const prevMonthBtn = document.querySelector('.prev-month-btn');
const nextMonthBtn = document.querySelector('.next-month-btn');
const currentMonthEl = document.querySelector('.current-month');
const calendarDays = document.querySelector('.calendar-days');

// Add event listeners to prev and next month buttons
prevMonthBtn.addEventListener('click', showPrevMonth);
nextMonthBtn.addEventListener('click', showNextMonth);

// Display initial calendar
displayCalendar(currentDate);

// Function to display the calendar for a specific month
function displayCalendar(date) {
  // Clear existing calendar days
  calendarDays.innerHTML = '';

  // Set the current month and year
  const year = date.getFullYear();
  const month = date.getMonth();

  // Update the calendar header
  currentMonthEl.textContent = monthNames[month] + ' ' + year;

  // Get the first day of the month
  const firstDay = new Date(year, month, 1);

  // Get the number of days in the month
  const lastDay = new Date(year, month + 1, 0).getDate();

  // Calculate the starting day offset
  const startOffset = firstDay.getDay();

  // Create calendar days
  for (let i = 1; i <= lastDay; i++) {
    const calendarDay = document.createElement('div');
    calendarDay.classList.add('calendar-day');
    calendarDay.textContent = i;

    // Add 'today' class if the day is today
    if (year === currentDate.getFullYear() && month === currentDate.getMonth() && i === currentDate.getDate()) {
      calendarDay.classList.add('today');
    }

    calendarDays.appendChild(calendarDay);
  }

  // Add event listeners to calendar days
  const calendarDayEls = document.querySelectorAll('.calendar-day');
  calendarDayEls.forEach(day => {
    day.addEventListener('click', selectDay);
  });
}

// Function to show the previous month
function showPrevMonth() {
  const currentMonth = currentDate.getMonth();
  currentDate.setMonth(currentMonth - 1);
  displayCalendar(currentDate);
}

// Function to show the next month
function showNextMonth() {
  const currentMonth = currentDate.getMonth();
  currentDate.setMonth(currentMonth + 1);
  displayCalendar(currentDate);
}

// Function to select a day
function selectDay() {
  // Clear previously selected day
  const selectedDay = document.querySelector('.selected');
  if (selectedDay) {
    selectedDay.classList.remove('selected');
  }

  // Set selected day
  this.classList.add('selected');
}