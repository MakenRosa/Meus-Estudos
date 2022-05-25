const menuBars = document.querySelectorAll(".bars");
const center = document.querySelector(".center");
const topBar = document.querySelector(".one");
const middleBar = document.querySelector(".two");
const bottomBar = document.querySelector(".three");

function toggleMenu() {
	if (center.classList.contains("clicked")) {
		center.classList.remove("clicked");
		topBar.classList.remove("top-bar");
			topBar.classList.add("top-bar-reverse");
		middleBar.classList.remove("middle-bar");
		middleBar.classList.add("middle-bar-reverse");
		bottomBar.classList.remove("bottom-bar");
		bottomBar.classList.add("bottom-bar-reverse");
	} else {
		center.classList.add("clicked");
		topBar.classList.remove("top-bar-reverse");
		topBar.classList.add("top-bar");
		middleBar.classList.remove("middle-bar-reverse");
			middleBar.classList.add("middle-bar");
		bottomBar.classList.remove("bottom-bar-reverse");
		bottomBar.classList.add("bottom-bar");
	}
}

center.addEventListener("click", toggleMenu);