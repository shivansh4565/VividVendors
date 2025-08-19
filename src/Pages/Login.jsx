import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../components/Assests/login.webp';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		// Save user info to localStorage
		localStorage.setItem('user', JSON.stringify({ email }));
		// Redirect to profile
		navigate('/profile');
	};

	return (
		<section className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-white">
			{/* Left: Login Form */}
			<div className="flex-1 flex items-center justify-center">
				<form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-8 w-full max-w-md">
					<div className="text-center mb-4 font-semibold text-lg">VividVendors</div>
					<h2 className="text-2xl font-bold text-center mb-2">Hey there! <span role="img" aria-label="wave">👋</span></h2>
					<p className="text-center text-gray-600 mb-6">Enter your username and password to Login.</p>
					<div className="mb-4">
						<label className="block mb-1 font-medium">Email</label>
						<input
							type="email"
							className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
							placeholder="Enter your email address"
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block mb-1 font-medium">Password</label>
						<input
							type="password"
							className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
							placeholder="Enter your password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>
					</div>
					<button type="submit" className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition mb-2">Sign In</button>
					<div className="text-center text-gray-600 mt-2">
						Don't have an account?{' '}
						<Link to="/register" className="text-blue-600 hover:underline">Register</Link>
					</div>
				</form>
			</div>
			{/* Right: Image */}
			<div className="flex-1 flex items-center justify-center p-4">
				<img
					src={loginImg}
					alt="Login visual"
					className="rounded-2xl object-cover w-full h-[500px] max-w-xl"
				/>
			</div>
		</section>
	);
};

export default Login;
