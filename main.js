const input = document.querySelector(".search");
const allLi = document.querySelectorAll("li");

const searchEngine = () => {
	// const text = input.value.toLowerCase();

	allLi.forEach((el) => {
		if (
			el.textContent.toLowerCase().indexOf(input.value.toLowerCase()) !== -1
		) {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
};

input.addEventListener("keyup", searchEngine);
