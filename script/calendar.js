export let dateToday = new Date();
export let year = dateToday.getFullYear();
export let month = dateToday.getMonth();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function displayCalendar() {
	const displayMonth = document.querySelector(".display-month");
	const displayYear = document.querySelector(".display-year");
	const days = document.querySelector(".days");
	const calendarEl = document.querySelector(".container");

	const firstDay = new Date(year, month, 1);
	const firstDayIndex = firstDay.getDay();
	const lastDay = new Date(year, month + 1, 0);
	const numberOfDays = lastDay.getDate();
	const lastDayIndex = lastDay.getDay();
	const prevLastDay = new Date(year, month, 0);
	const prevNumberOfDays = prevLastDay.getDate();
	const nextDays = 7 - lastDayIndex - 1;

	days.innerHTML = "";
	displayMonth.innerHTML = monthNames[month];
	displayYear.innerHTML = year;

	// 이전 달 날짜 추가
	for (let i = firstDayIndex; i > 0; i--) {
		let div = document.createElement("div");
		div.innerText = prevNumberOfDays - i + 1;
		div.classList.add("prev-date");
		days.appendChild(div);
	}

	// 현재 달 날짜 추가
	for (let j = 1; j <= numberOfDays; j++) {
		let div = document.createElement("div");
		div.innerText = j;
		div.dataset.date = new Date(year, month, j).toDateString();
		days.appendChild(div);

		if (year === dateToday.getFullYear() && month === dateToday.getMonth() && j === dateToday.getDate()) {
			div.classList.add("current-date");
		}
		if (new Date(year, month, j).getDay() === 0) {
			div.style.color = "red";
		}
	}

	// 다음 달 날짜 추가
	for (let k = 1; k <= nextDays; k++) {
		let div = document.createElement("div");
		div.innerText = k;
		div.classList.add("next-date");
		days.appendChild(div);
	}
}

export function changeMonth(direction) {
	if (direction === "prev") {
		month--;
		if (month < 0) {
			month = 11;
			year--;
		}
	} else if (direction === "next") {
		month++;
		if (month > 11) {
			month = 0;
			year++;
		}
	}
	displayCalendar();
}
