'use client';
import React from 'react';
import SocialList from '../SocialList/SocialList';

const Hero = () => {
	return (
		<>
			<div className="md:flex md:flex-row mx-auto px-4 mt-20">
				<div className="flex flex-col text-center">
					<p className="text-2xl">Hi I&apos;m</p>
					<h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Kai Kopecky
					</h1>
					<p className="text-2xl">
						a Full Stack Developer with a passion for ReactJS, Typescript and
						lot of other technologies.
					</p>
				</div>
				<div className="flex flex-wrap justify-center pt-4 pb-4">
					<div className="w-8/12 sm:w-6/12 px-4">
						<img
							src="https://avatars.githubusercontent.com/u/5694288?v=4"
							alt="..."
							className="shadow rounded-full max-w-full h-auto align-middle border-none"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap justify-center mb-20">
				<SocialList classNameChildren=" text-[#4f2569]" />
			</div>
		</>
	);
};

export default Hero;
