export function handleDateSelection() {
	const selected = document.querySelector(".selected");
	const displaySelectedBox = document.querySelector(".display-selected");
	const calendarEl = document.querySelector(".container");

	document.querySelector(".days").addEventListener("click", (event) => {
		if (event.target.tagName === "DIV" && event.target.dataset.date) {
			const selectedDateObj = new Date(event.target.dataset.date);

			const formattedDate = `${selectedDateObj.getFullYear()}.${String(selectedDateObj.getMonth() + 1).padStart(2, "0")}.${String(
				selectedDateObj.getDate()
			).padStart(2, "0")}`;

			selected.innerHTML = formattedDate;
			selected.style.opacity = "1";

			calendarEl.style.display = "none";
			displaySelectedBox.classList.remove("active");
		}
	});

	document.addEventListener("click", (event) => {
		if (!calendarEl.contains(event.target) && !displaySelectedBox.contains(event.target)) {
			calendarEl.style.display = "none";
			displaySelectedBox.classList.remove("active");
		}
	});

	displaySelectedBox.addEventListener("click", (event) => {
		event.stopPropagation();
		displaySelectedBox.classList.toggle("active");
		calendarEl.style.display = calendarEl.style.display === "none" ? "flex" : "none";
	});
}
