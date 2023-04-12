import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import  "./Signup.css";


const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		countryName: "",
		cityName: "",
		mobileNumber:"",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	// const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8000/api/users";
			const { data: res } = await axios.post(url, data);
			// navigate("/");
			console.log(res.message);
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

	return (
		<>
			<div>
			<form className='form_container' onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className='input'
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className='input'
						/>
						<input
							type="text"
							placeholder="Country"
							name="countryName"
							onChange={handleChange}
							value={data.countryName}
							required
							className='input'
						/>
						<input
							type="text"
							placeholder="City"
							name="cityName"
							onChange={handleChange}
							value={data.cityName}
							required
							className='input'
						/>
						<input
							type="text"
							placeholder="+91xxxxxxxx"
							name="mobileNumber"
							onChange={handleChange}
							value={data.mobileNumber}
							required
							className='input'
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className='input'
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className='input'
						/>
						{error && <div className='error_msg'>{error}</div>}
						<button type="submit" className='green_btn'>
							Sing Up
						</button>
					</form>
			</div>
		</>
	);
};

export default Signup;