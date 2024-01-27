import { MenuItem } from '@app/components/MenuItem/MenuItem';
import pizzaMenu from '@app/mocks/pizza.json';

export const MenuList = () => {
	return (
		<div className="flex flex-wrap gap-10">
			{pizzaMenu.map(({ image, ...pizza }) => (
				<MenuItem {...pizza} imagePath={'/assets/pizza/' + image} />
			))}
		</div>
	);
};
