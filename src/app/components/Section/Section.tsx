import React from 'react';

export interface SectionProps {
	title: string;
	children?: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
	return (
		<section className=" py-8">
			<div className="container mx-auto">
				<h2 className="text-[#4f2569] text-2xl font-semibold mb-4">{title}</h2>
				<div className=" p-6">{children}</div>
			</div>
		</section>
	);
};

export default Section;
