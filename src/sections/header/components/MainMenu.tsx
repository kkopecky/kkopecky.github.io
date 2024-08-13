export type MenuItem = {
	name: string;
	ref: string;
};

export interface MainMenuProps {
	items: Array<MenuItem>;
}

const MainMenu = ({ items }: MainMenuProps) => {
	return items.map((item, index) => (
		<a
			key={`main-menu-item-${index}`}
			className="transition-colors hover:text-foreground/80 text-foreground/60"
			href={`#${item.ref}`}
		>
			{item.name}
		</a>
	));
};

export default MainMenu;
