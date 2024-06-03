import React, { useEffect, useState } from "react";

const Counter = () => {
	let defaultMessage = "hello";
	let defaultStatus = {
		increment: false,
		decrement: false,
	};

	const [message, setMessage] = useState(defaultMessage);
	const [count, setCount] = useState(0);
	const [totatCount, setTotalCount] = useState(0);
	const [status, setStatus] = useState(defaultStatus);

	useEffect(() => {
		// console.log(status);
		if (status.increment) {
			setMessage(`increment: current value is ${count}`);
		}
		if (status.decrement) {
			setMessage(`decrement: current value is  ${count}`);
		}

		// console.log("useEffect");
		// return () => console.log("clean up");
	}, [status]);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
		setStatus({ increment: true, decrement: false });

		setTotalCount((prevTotal) => prevTotal + 1);
	};
	const decrement = () => {
		setCount((prevCount) => prevCount - 1);
		setStatus({ increment: false, decrement: true });
		setTotalCount((prevTotal) => prevTotal + 1);
	};

	return (
		<div className="flex flex-col items-center w-4/5 h-auto gap-4 p-4 border -2/5 md:w-2/5 border-slate-900">
			<h1 className="mx-auto text-xl font-bold">Counter</h1>
			<p className="mx-auto my-4 text-lg font-semibold">
				You clicked TOTAL:{" "}
				<span className="text-2xl font-bold text-red-600">{totatCount}</span>{" "}
				times
			</p>
			<p className="text-3xl font-bold text-indigo-600">{message}</p>
			<div className="flex gap-8">
				<button
					className="px-6 py-2 font-medium bg-slate-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
					onClick={decrement}
				>
					Decrement
				</button>
				<button
					className="px-6 py-2 font-medium bg-green-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
					onClick={increment}
				>
					Increment
				</button>
			</div>
		</div>
	);
};

export default Counter;
