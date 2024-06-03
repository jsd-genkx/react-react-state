import { useEffect } from "react";

const MyComponent = () => {
	const log = () => {
		console.log("hello");
	};
	// useEffect(() => {

	// 	const intervalId = setInterval(log, 0.1);

	// 	return () => clearInterval(intervalId);
	// }, []);
};

export default MyComponent;
