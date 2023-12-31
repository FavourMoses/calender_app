const htmlMonth = document.getElementById('current-month');
const htmlCalendarDays = document.querySelector('.days');
const nextMonth = document.querySelector('.next-month');
const prevMonth = document.querySelector('.prev-month');
const date = new Date();
const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'Novemember',
  'December',
];

function empty(element) {
  while (element.firstElementChild) {
    element.firstElementChild.remove();
  }
}

let currentMonth = months[date.getMonth()];
htmlMonth.textContent = currentMonth;
const year = 2023;
const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

let currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
empty(htmlCalendarDays);

for (let day = 1; currentMonthDays > day; day++) {
  const li = document.createElement('li');
  li.classList.add('day');
  li.textContent = `${day}`;
  htmlCalendarDays.appendChild(li);
}

nextMonth.addEventListener('click', () => {
  switch (currentMonth) {
    case months[0]:
      currentMonth = months[1];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[1]:
      currentMonth = months[2];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[2]:
      currentMonth = months[3];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[3]:
      currentMonth = months[4];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[4]:
      currentMonth = months[5];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[5]:
      currentMonth = months[6];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[6]:
      currentMonth = months[7];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[7]:
      currentMonth = months[8];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[8]:
      currentMonth = months[9];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[9]:
      currentMonth = months[10];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[10]:
      currentMonth = months[11];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);
      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[11]:
      currentMonth = months[0];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);
      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
  }
});

prevMonth.addEventListener('click', () => {
  switch (currentMonth) {
    case months[0]:
      currentMonth = months[11];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[1]:
      currentMonth = months[0];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[2]:
      currentMonth = months[1];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[3]:
      currentMonth = months[2];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[4]:
      currentMonth = months[3];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[5]:
      currentMonth = months[4];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[6]:
      currentMonth = months[5];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[7]:
      currentMonth = months[6];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[8]:
      currentMonth = months[7];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[9]:
      currentMonth = months[8];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);

      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[10]:
      currentMonth = months[9];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);
      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
    case months[11]:
      currentMonth = months[10];
      htmlMonth.textContent = currentMonth;
      currentMonthDays = getDays(year, months.indexOf(currentMonth) + 1);
      empty(htmlCalendarDays);
      for (let day = 1; currentMonthDays > day; day++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.textContent = `${day}`;
        htmlCalendarDays.appendChild(li);
      }
      break;
  }
});
