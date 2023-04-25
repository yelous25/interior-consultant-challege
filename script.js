let hidden = true;
const openMenu = () => {
	hidden = !hidden;
	if (hidden) {
		if (document.querySelector(".overlayMenu")) {
			document
				.querySelector(".overlayMenu")
				.setAttribute("class", "navbar");
		}
		document
			.querySelector(".fa.fa-xmark")
			.setAttribute("class", "fa fa-bars");
	} else {
		if (document.querySelector(".navbar")) {
			document
				.querySelector(".navbar")
				.setAttribute("class", "overlayMenu");
		}
		document
			.querySelector(".fa.fa-bars")
			.setAttribute("class", "fa fa-xmark");
	}
};
console.log(screen.width);
