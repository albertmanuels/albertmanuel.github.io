import { useState } from "react";

export const useView = () => {
	const [isScroll, setIsScroll] = useState(false);

	const handleChangeColor = () => {
		if (window.scrollY >= 90) {
			setIsScroll(true);
		} else {
			setIsScroll(false);
		}
	};
	window.addEventListener("scroll", handleChangeColor);

	return {
		isScroll,
	};
};