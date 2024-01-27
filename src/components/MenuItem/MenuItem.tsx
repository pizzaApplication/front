import { FC } from 'react';

interface MenuItemProps {
	imagePath: string;
	weight: number;
	title: string;
	ingredients: string;
	price: number;
}

// const values: MenuItemProps = {
// 	imagePath: '/assets/pizza/pizza-01.jpeg',
// 	weight: 555,
// 	title: 'Manhattan pizza',
// 	ingredients:
// 		'Double portion of mushrooms, mozzarella, pepperoni, Alfredo sauce',
// 	price: 215
// };

export const MenuItem: FC<MenuItemProps> = ({
	imagePath,
	weight,
	title,
	ingredients,
	price
}) => {
	return (
		<div className="max-w-96 bg-white shadow-xl rounded-2xl overflow-hidden">
			<div className="relative flex max-h-[15rem]">
				<img src={imagePath} alt={title} className="object-cover" />
				<span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
					{weight} g
				</span>
			</div>
			<div className="p-8">
				<h2 className="text-xl font-semibold mb-2">{title}</h2>
				<p className="mb-8">{ingredients}</p>
				<span className="text-xl font-semibold">{price} uah</span>
			</div>
		</div>
	);
};
