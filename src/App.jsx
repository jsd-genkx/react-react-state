import Ract, { useState } from "react";

import Counter from "./components/Counter";
import FormExample from "./components/FormExample";
import MyComponent from "./components/MyComponent";
import InputForm from "./components/InputForm";

function App() {
	const [inputUsername, setInputUsername] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const handleChangeUsername = (e) => {
		setInputUsername(e.target.value);
		// console.log(e);
		// console.log(e.target);
		// console.log(e.target.name);
		// console.log(e.target.value);
		const values = e.target.value.trim().split(" ");
		const cleanedUpValue = values.filter((value) => value !== "");
		const finalValue = cleanedUpValue.join(" ");
		console.log(finalValue);
	};
	const handleChangePassword = (e) => {
		setInputPassword(e.target.value);
		// console.log(e);
		// console.log(e.target);
		// console.log(e.target.name);
		console.log(e.target.value);
	};

	let countVariable = 1_000;

	const [isRender, setIsRender] = useState(false);

	const toggleIsRender = () => {
		setIsRender((prevState) => !prevState);
	};

	const incrementCountVariable = () => {
		console.log(countVariable + 1);
		return (countVariable) => countVariable + 1;
	};

	const decrementCountVariable = () => {
		console.log(countVariable - 1);
		return countVariable - 1;
	};

	return (
		<>
			<div className="flex flex-col items-center justify-start w-full gap-8 bg-blue-300 h-dvh">
				<h1 className="my-8 text-4xl font-bold">Hello React App 👸</h1>
				{/* <button
					className="px-6 py-2 font-medium bg-blue-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
					onClick={toggleIsRender}
				>
					Toggle Render Counter
				</button> */}
				{/* {isRender && <Counter />}

				<div className="flex items-center justify-center w-2/5 h-auto gap-4 p-4 text-2xl font-bold border md:w-2/5 border-slate-900">
					<button onClick={decrementCountVariable}>-</button>
					<span>{countVariable}</span>
					<button onClick={incrementCountVariable}>+</button>
				</div> */}
				<Counter />
				{/* <FormExample /> */}
				{/* 	<label className="text-2xl font-bold">
					Username:
					<input
						type="text"
						name="username"
						value={inputUsername}
						className="px-4 py-2 ml-4"
						autoComplete="off"
						onChange={handleChangeUsername}
					/>
				</label>
				<label className="text-2xl font-bold">
					Password:
					<input
						type="text"
						name="password"
						value={inputPassword}
						className="px-4 py-2 ml-4"
						autoComplete="off"
						onChange={handleChangePassword}
					/>
				</label> */}

				{/* <InputForm /> */}

				{/* <MyComponent /> */}
			</div>
		</>
	);
}

export default App;
