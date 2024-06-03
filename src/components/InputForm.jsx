import React, { useState } from "react";

const InputForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md"
			>
				<div className="mb-4">
					<label
						htmlFor="firstName"
						className="block mb-2 text-sm font-medium text-gray-700"
					>
						First Name
					</label>
					<input
						type="text"
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="First Name"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="lastName"
						className="block mb-2 text-sm font-medium text-gray-700"
					>
						Last Name
					</label>
					<input
						type="text"
						name="lastName"
						value={formData.lastName}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Last Name"
					/>
				</div>
				<button
					type="submit"
					className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default InputForm;
