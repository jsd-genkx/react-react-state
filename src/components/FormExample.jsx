import React, { useState } from "react";
function FormExample() {
	const defaultFormData = {
		username: "",
		email: "",
	};
	const [formData, setFormData] = useState(defaultFormData);
	const handleChange = (e) => {
		// const name = e.target.name;
		// console.log(name);
		// const value = e.target.value;
		// console.log(value);
		const { name, value } = e.target;

		// console.log(e.target);
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(e);
		console.log("Form Submitted:", formData);
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center w-2/5 h-auto p-4 border gap- 4 border-slate-900"
		>
			<div className="mb-4">
				<label>
					Username:
					<input
						type="text"
						name="username"
						autoComplete="off"
						value={formData.username}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div className="mb-4">
				<label>
					Email:
					<input
						type="email"
						name="email"
						autoComplete="off"
						value={formData.email}
						onChange={handleChange}
					/>
				</label>
			</div>
			<button
				type="submit"
				className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
			>
				Submit
			</button>
		</form>
	);
}
export default FormExample;
