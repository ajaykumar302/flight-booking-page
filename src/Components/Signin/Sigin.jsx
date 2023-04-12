import React from 'react'
import { useState } from "react";
import axios from "axios";
import './Sigin.css'

const Sigin = () => {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	// className='login_container'
	// className='login_form_container'
	return (
		<>
		
			<div>
			<form className='form_container' onSubmit={handleSubmit}>
					
					<h1>Signin to Your Account</h1>
					<input
						type="email"
						placeholder="Email"
						name="email"
						onChange={handleChange}
						value={data.email}
						required
						className='input1'
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={handleChange}
						value={data.password}
						required
						className='input1'
					/>
					{error && <div className='error_msg'>{error}</div>}
					<button type="submit" className='green_btn'>
						Sing In
					</button>
				</form>
			</div>
		
		</>
	);
}

export default Sigin