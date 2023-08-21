'use client'
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';

export default function Home() {
	return (
		<main>
			<Navbar />
			<div className="container mx-auto px-4">
				<Hero />
			</div>
		</main>
	);
}
