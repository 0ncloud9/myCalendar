// let displayMonth = document.querySelector(".display-month"),
// 	displayYear = document.querySelector(".display-year"),
// 	preBtn = document.querySelector(".left"),
// 	nextBtn = document.querySelector(".right"),
// 	days = document.querySelector(".days"),
// 	displaySelectedBox = document.querySelector(".display-selected"),
// 	selected = document.querySelector(".selected"),
// 	calendarEl = document.querySelector(".container");

// let dateToday = new Date();
// let year = dateToday.getFullYear();
// let month = dateToday.getMonth();
// let day = dateToday.getDate();
// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// function displayCalendar() {
// 	const firstDay = new Date(year, month, 1);
// 	const firstDayIndex = firstDay.getDay();
// 	const lastDay = new Date(year, month + 1, 0);
// 	const numberOfDays = lastDay.getDate();
// 	const lastDayIndex = lastDay.getDay();
// 	const prevLastDay = new Date(year, month, 0);
// 	const prevNumberOfDays = prevLastDay.getDate();
// 	const nextDays = 7 - lastDayIndex - 1;

// 	days.innerHTML = "";

// 	// 월, 년 출력
// 	displayMonth.innerHTML = monthNames[month];
// 	displayYear.innerHTML = year;

// 	// 이전 달의 마지막 날짜들 추가
// 	for (let i = firstDayIndex; i > 0; i--) {
// 		let div = document.createElement("div");
// 		let prevDate = new Date(year, month - 1, prevNumberOfDays - i + 1);

// 		div.dataset.date = prevDate.toDateString();
// 		div.innerText = prevNumberOfDays - i + 1;
// 		div.classList.add("prev-date");
// 		days.appendChild(div);
// 	}

// 	// 현재 달의 날짜들 추가
// 	for (let j = 1; j <= numberOfDays; j++) {
// 		let div = document.createElement("div");
// 		let currentDate = new Date(year, month, j);

// 		div.dataset.date = currentDate.toDateString();
// 		div.innerText = j;
// 		days.appendChild(div);

// 		if (
// 			currentDate.getFullYear() === new Date().getFullYear() &&
// 			currentDate.getMonth() === new Date().getMonth() &&
// 			currentDate.getDate() === new Date().getDate()
// 		) {
// 			div.classList.add("current-date");
// 		}
// 		if (currentDate.getDay() === 0) {
// 			div.style.color = "red";
// 		}

// 		div.onclick = () => {
// 			calendarEl.style.display = "none";
// 			displaySelectedBox.classList.remove("active");
// 		};
// 	}

// 	// 다음 달의 첫 날짜들 추가
// 	for (let k = 1; k <= nextDays; k++) {
// 		let div = document.createElement("div");
// 		let nextDate = new Date(year, month + 1, k);

// 		div.dataset.date = nextDate.toDateString();
// 		div.innerText = k;
// 		div.classList.add("next-date");
// 		days.appendChild(div);
// 	}

// 	displaySelected();
// }

// function displaySelected() {
// 	const daysEl = document.querySelectorAll(".days div");
// 	selected.innerHTML = `Select Date`;
// 	daysEl.forEach((day) => {
// 		if (day.innerText) {
// 			// 날짜가 있는 요소에만 이벤트 리스너 추가
// 			day.addEventListener("click", (e) => {
// 				const selectedDateObj = new Date(e.target.dataset.date);

// 				// YYYYMMDD 형식으로 변환
// 				const formattedYear = selectedDateObj.getFullYear();
// 				const formattedMonth = String(selectedDateObj.getMonth() + 1).padStart(2, "0");
// 				const formattedDay = String(selectedDateObj.getDate()).padStart(2, "0");
// 				const formattedDate = `${formattedYear}.${formattedMonth}.${formattedDay}`;

// 				selected.innerHTML = formattedDate;
// 				selected.style.opacity = "1";
// 			});
// 		}
// 	});
// }

// document.addEventListener("click", function (event) {
// 	// 클릭된 요소가 container나 display-selected의 자식 요소인지 확인
// 	const isClickInsideContainer = calendarEl.contains(event.target);
// 	const isClickInsideDisplaySelected = displaySelectedBox.contains(event.target);

// 	// 클릭된 요소가 displaySelectedBox 자체인지 확인 (캘린더 토글 버튼)
// 	const isClickOnDisplaySelected = event.target === displaySelectedBox;

// 	// container나 display-selected 영역 외부를 클릭했을 경우에만 캘린더 닫기
// 	if ((!isClickInsideContainer && !isClickInsideDisplaySelected) || isClickOnDisplaySelected) {
// 		// displaySelectedBox 자체를 클릭한 경우는 토글 이벤트에서 처리하므로 무시
// 		if (!isClickOnDisplaySelected) {
// 			calendarEl.style.display = "none";
// 			displaySelectedBox.classList.remove("active");
// 		}
// 	}
// });

// displaySelectedBox.addEventListener("click", (event) => {
// 	event.stopPropagation();
// 	displaySelectedBox.classList.toggle("active");
// 	calendarEl.style.display = calendarEl.style.display === "none" ? "flex" : "none";
// });

// displayCalendar();

// //화면 크기 별 캘린더 넓이 조절
// document.addEventListener("DOMContentLoaded", function () {
// 	const root = document.documentElement;

// 	function updateCalendarSize() {
// 		let screenWidth = window.innerWidth;
// 		let newSize;

// 		if (screenWidth <= 768) {
// 			newSize = 90;
// 		} else if (screenWidth <= 1200) {
// 			newSize = 70;
// 		} else {
// 			newSize = 50;
// 		}

// 		root.style.setProperty("--calendar-size", `${newSize}vw`);
// 	}

// 	window.addEventListener("resize", updateCalendarSize);
// 	updateCalendarSize(); // 초기 크기 설정
// });

// //달력 전/후 월 이동
// preBtn.addEventListener("click", () => {
// 	month--; // Update month variable instead of dateToday
// 	if (month < 0) {
// 		// Handle year change when going from January to December
// 		month = 11;
// 		year--;
// 	}
// 	displayCalendar();
// });

// nextBtn.addEventListener("click", () => {
// 	month++; // Update month variable instead of dateToday
// 	if (month > 11) {
// 		// Handle year change when going from December to January
// 		month = 0;
// 		year++;
// 	}
// 	displayCalendar();
// });

import { displayCalendar, changeMonth } from "./calendar.js";
import { handleDateSelection } from "./datePicker.js";

// 달력 초기 표시
document.addEventListener("DOMContentLoaded", () => {
	displayCalendar();
	handleDateSelection();
	updateCalendarSize();

	document.querySelector(".left").addEventListener("click", () => {
		changeMonth("prev");
	});

	document.querySelector(".right").addEventListener("click", () => {
		changeMonth("next");
	});

	window.addEventListener("resize", updateCalendarSize);
});

// 화면 크기에 따라 달력 크기 조정
function updateCalendarSize() {
	const root = document.documentElement;
	let screenWidth = window.innerWidth;
	let newSize = screenWidth <= 768 ? 90 : screenWidth <= 1200 ? 70 : 50;

	root.style.setProperty("--calendar-size", `${newSize}vw`);
}
