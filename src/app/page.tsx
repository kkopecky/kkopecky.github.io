import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';

export default function Home() {
	const loremIpsum = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
					sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
					rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
					ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
					sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
					dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
					et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
					takimata sanctus est Lorem ipsum dolor sit amet.`;

	return (
		<main>
			<Navbar />
			<div className="container mx-auto px-4">
				<Hero />
			</div>
			<Section title="About Me">
				<p>{loremIpsum}</p>
			</Section>
			<Section title="Skills">
				<p>{loremIpsum}</p>
			</Section>
			<Section title="Projects">
				<p>{loremIpsum}</p>
			</Section>
			<Section title="Contact">
				<p>{loremIpsum}</p>
			</Section>

			<Footer />
		</main>
	);
}
