import React from 'react';
import { FaLinkedin, FaXingSquare, FaGithub, FaGitlab } from 'react-icons/fa';
import SocialList from '../SocialList/SocialList';

const Footer = () => {
	return (
		<footer className="bg-[#4f2569] text-white py-10">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
				<div className="text-center md:text-left mb-5 md:mb-0">
					<h2 className="text-2xl font-semibold">Stay Connected</h2>
					<p className="mt-2">Follow me on social media for updates.</p>
				</div>
				<SocialList classNameChildren=" text-white" />
			</div>
		</footer>
	);
};

export default Footer;
