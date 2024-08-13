import { Separator } from '@/components/ui/separator';
import MainMenu, { MenuItem } from './components/MainMenu';

const Header = () => {
	const menuItems: Array<MenuItem> = [
		{ name: 'About me', ref: 'about' },
		{ name: 'Expierence', ref: 'expierence' },
		{ name: 'Projects', ref: 'projects' },
		{ name: 'Contact', ref: 'contact' },
	];

	return (
		<header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<div className="mr-4 hidden md:flex">
					<a className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
							className="h-6 w-6"
						>
							<rect width="256" height="256" fill="none"></rect>
							<line
								x1="208"
								y1="128"
								x2="128"
								y2="208"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></line>
							<line
								x1="192"
								y1="40"
								x2="40"
								y2="192"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></line>
						</svg>
						<span className="hidden font-bold lg:inline-block">
							Kai Kopecky
						</span>
					</a>
					<nav className="flex items-center gap-4 text-sm lg:gap-6">
						<MainMenu items={menuItems} />
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
